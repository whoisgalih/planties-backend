const AddCartItem = require('../../Domains/cartItems/entities/AddCartItem');

class AddCartItemUseCase {
  constructor({ cartRepository, cartItemRepository }) {
    this._cartRepository = cartRepository;
    this._cartItemRepository = cartItemRepository;
  }

  async execute(useCasePayload) {
    const addCartItem = new AddCartItem(useCasePayload);

    console.log(addCartItem);

    const cart_id = await this._cartRepository.getActiveCartId(addCartItem.user_id);

    await this._cartItemRepository.verifyIfItemNotInCart(cart_id, addCartItem.item);

    return this._cartItemRepository.addCartItem({ cart_id, ...addCartItem });
  }
}

module.exports = AddCartItemUseCase;
