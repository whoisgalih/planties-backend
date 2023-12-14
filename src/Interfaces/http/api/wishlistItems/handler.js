const AddItemToWishlistUseCase = require('../../../../Applications/use_case/AddItemToWishlistUseCase');

class WishlistItemHandler {
  constructor(container) {
    this._container = container;

    this.postWishlistItemHandler = this.postWishlistItemHandler.bind(this);
  }

  async postWishlistItemHandler(request, h) {
    const addItemToWishlistUseCase = this._container.getInstance(AddItemToWishlistUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const { item } = request.payload;

    const addedWishlistItem = await addItemToWishlistUseCase.execute({ user_id, item });

    const response = h.response({
      status: 'success',
      data: {
        wishlist_item: addedWishlistItem,
      },
    });

    response.code(201);
    return response;
  }
}

module.exports = WishlistItemHandler;
