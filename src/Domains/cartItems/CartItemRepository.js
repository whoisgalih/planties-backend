class CartItemRepository {
  async addCartItem(cartItem) {
    throw new Error('CART_ITEM_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async verifyIfItemNotInCart(cart_id, item) {
    throw new Error('CART_ITEM_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = CartItemRepository;
