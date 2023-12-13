const AddCartItem = require('../../Domains/cartItems/entities/AddCartItem');

class AddCartItemUseCase {
  constructor({ marketplaceItemRepository, cartRepository, cartItemRepository }) {
    this._marketplaceItemRepository = marketplaceItemRepository;
    this._cartRepository = cartRepository;
    this._cartItemRepository = cartItemRepository;
  }

  async execute(useCasePayload) {
    const addCartItem = new AddCartItem(useCasePayload);

    await this._marketplaceItemRepository.getMarketplaceItemById(addCartItem.item);

    const cart_id = await this._cartRepository.getActiveCartId(addCartItem.user_id);

    await this._cartItemRepository.verifyIfItemNotInCart(cart_id, addCartItem.item);

    return this._cartItemRepository.addCartItem({ cart_id, ...addCartItem });
  }
}

module.exports = AddCartItemUseCase;
