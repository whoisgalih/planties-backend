const AddWishlist = require('../../Domains/wishlistItems/entities/AddWishlistItem');

class AddWishlistUseCase {
  constructor({ wishlistRepository, wishlistItemRepository, marketplaceItemRepository }) {
    this._wishlistRepository = wishlistRepository;
    this._wishlistItemRepository = wishlistItemRepository;
    this._marketplaceItemRepository = marketplaceItemRepository;
  }

  async execute(useCasePayload) {
    const addWishlist = new AddWishlist(useCasePayload);

    const wishlist_id = await this._wishlistRepository.getWishlistByUserId(addWishlist.user_id);
    await this._marketplaceItemRepository.getMarketplaceItemById(addWishlist.item);

    await this._wishlistItemRepository.verifyIfItemAlreadyExistInWishlist(addWishlist.item, wishlist_id);
    return this._wishlistItemRepository.addWishlistItem({ ...addWishlist, wishlist_id });
  }
}

module.exports = AddWishlistUseCase;
