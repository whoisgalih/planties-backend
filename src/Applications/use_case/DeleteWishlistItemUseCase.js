const DeleteWishlistItem = require('../../Domains/wishlistItems/entities/DeleteWishlistItem');

class DeleteWishlistItemUseCase {
  constructor({ wishlistItemRepository }) {
    this._wishlistItemRepository = wishlistItemRepository;
  }

  async execute(useCasePayload) {
    const deleteWishlistItem = new DeleteWishlistItem(useCasePayload);
    return this._wishlistItemRepository.deleteWishlistItem(deleteWishlistItem);
  }
}

module.exports = DeleteWishlistItemUseCase;
