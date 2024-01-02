const AddTransaction = require('../../Domains/transactions/entities/AddTransaction');
const InvariantError = require('../../Commons/exceptions/InvariantError');

class AddTransactionUseCase {
  constructor({ transactionRepository, marketplaceItemRepository, shipmentRepository, paymentRepository, addressRepository, cartRepository, cartItemRepository }) {
    this._transactionRepository = transactionRepository;
    this._marketplaceItemRepository = marketplaceItemRepository;
    this._shipmentRepository = shipmentRepository;
    this._paymentRepository = paymentRepository;
    this._addressRepository = addressRepository;
    this._cartRepository = cartRepository;
    this._cartItemRepository = cartItemRepository;
  }

  async execute(useCasePayload) {
    const newTransaction = new AddTransaction(useCasePayload);

    // get current cart
    const currentCart = await this._cartRepository.getActiveCartId(newTransaction.user_id);
    newTransaction.cart_id = currentCart;

    // check if cart item not empty
    const cartItems = await this._cartItemRepository.getCartItems(newTransaction.user_id);

    if (!cartItems.length) {
      throw new InvariantError('Tidak ada item di dalam cart');
    }

    // check if shipment is available
    await this._shipmentRepository.getShipmentById(newTransaction.shipment_id);

    // check if payment is available
    await this._paymentRepository.getPaymentById(newTransaction.payment_id);

    // check if address is available
    await this._addressRepository.getAddressById({
      user_id: newTransaction.user_id,
      id: newTransaction.address_id,
    });

    // add sold count for each item
    // count the price and discount
    let totalPrice = 0;
    let totalDiscount = 0;
    cartItems.forEach(async (item) => {
      const discount = item.price * (item.discount / 100);
      totalDiscount += discount;

      totalPrice += item.price * item.quantity;
      this._marketplaceItemRepository.addSoldCount(item.marketplace_item_id, item.quantity);
    });

    newTransaction.price = totalPrice;
    newTransaction.discount = totalDiscount;

    // create transaction
    const transaction = await this._transactionRepository.addTransaction(newTransaction);

    // change current cart status to inactive
    await this._cartRepository.updateCartStatus(currentCart, false);

    // create new cart
    await this._cartRepository.createCart(newTransaction.user_id);

    return transaction;
  }
}

module.exports = AddTransactionUseCase;
