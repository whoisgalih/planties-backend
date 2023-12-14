class WishlistItemRepository {
  async addWishlistItem(wishlist) {
    throw new Error('WISHLIST_ITEM_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async verifyIfItemAlreadyExistInWishlist(item, wishlist_id) {
    throw new Error('WISHLIST_ITEM_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = WishlistItemRepository;
