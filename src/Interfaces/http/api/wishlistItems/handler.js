const AddItemToWishlistUseCase = require('../../../../Applications/use_case/AddItemToWishlistUseCase');
const GetAllWishlistItemsUseCase = require('../../../../Applications/use_case/GetAllWishlistItemsUseCase');

class WishlistItemHandler {
  constructor(container) {
    this._container = container;

    this.postWishlistItemHandler = this.postWishlistItemHandler.bind(this);
    this.getAllWishlistItemsHandler = this.getAllWishlistItemsHandler.bind(this);
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

  async getAllWishlistItemsHandler(request, h) {
    const getWishlistItemUseCase = this._container.getInstance(GetAllWishlistItemsUseCase.name);

    const { id: user_id } = request.auth.credentials;

    const wishlistItems = await getWishlistItemUseCase.execute(user_id);

    const response = h.response({
      status: 'success',
      data: {
        wishlist_items: wishlistItems,
      },
    });

    response.code(200);
    return response;
  }
}

module.exports = WishlistItemHandler;
