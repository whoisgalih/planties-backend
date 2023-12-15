class GetAllWishlistItemsUseCase {
  constructor({ wishlistItemRepository }) {
    this._wishlistItemRepository = wishlistItemRepository;
  }

  async execute(useCasePayload) {
    const wishlistItems = await this._wishlistItemRepository.getAllWishlistItems(useCasePayload);
    return wishlistItems;
  }
}

module.exports = GetAllWishlistItemsUseCase;
