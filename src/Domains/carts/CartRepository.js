class CartRepository {
  async createCart(userId) {
    throw new Error('CART_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async getActiveCartId(userId) {
    throw new Error('CART_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = CartRepository;
