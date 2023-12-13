const DeleteCartItem = require('../../Domains/cartItems/entities/DeleteCartItem');

class DeleteCartItemByIdUseCase {
  constructor({ cartItemRepository }) {
    this._cartItemRepository = cartItemRepository;
  }

  async execute(useCasePayload) {
    const deleteCartItem = new DeleteCartItem(useCasePayload);

    return this._cartItemRepository.deleteCartItemById(deleteCartItem);
  }
}

module.exports = DeleteCartItemByIdUseCase;
