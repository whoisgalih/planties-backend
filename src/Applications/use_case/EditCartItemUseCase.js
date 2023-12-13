const EditCartItem = require('../../Domains/cartItems/entities/EditCartItem');

class EditCartItemUseCase {
  constructor({ cartItemRepository }) {
    this._cartItemRepository = cartItemRepository;
  }

  async execute(useCasePayload) {
    const addCartItem = new EditCartItem(useCasePayload);

    if (addCartItem.quantity > 0) {
      return this._cartItemRepository.editCartItem(addCartItem);
    } else {
      return this._cartItemRepository.deleteCartItemById(addCartItem);
    }
  }
}

module.exports = EditCartItemUseCase;
