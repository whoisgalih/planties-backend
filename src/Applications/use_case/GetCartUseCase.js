class GetCartUseCase {
  constructor({ cartItemRepository }) {
    this._cartItemRepository = cartItemRepository;
  }

  async execute(useCasePayload) {
    const cartItems = await this._cartItemRepository.getCartItems(useCasePayload);

    return cartItems;
  }
}

module.exports = GetCartUseCase;
