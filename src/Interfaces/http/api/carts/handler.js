const AddCartItemUseCase = require('../../../../Applications/use_case/AddCartItemUseCase');
const GetCartUseCase = require('../../../../Applications/use_case/GetCartUseCase');
const EditCartItemUseCase = require('../../../../Applications/use_case/EditCartItemUseCase');

class CartsHandler {
  constructor(container) {
    this._container = container;

    this.postCartHandler = this.postCartHandler.bind(this);
    this.getCartHandler = this.getCartHandler.bind(this);
    this.putCartItemHandler = this.putCartItemHandler.bind(this);
  }

  async postCartHandler(request, h) {
    const addCartItemUseCase = this._container.getInstance(AddCartItemUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const payload = {
      ...request.payload,
      user_id,
    };

    const cartItemId = await addCartItemUseCase.execute(payload);

    const response = h.response({
      status: 'success',
      data: {
        cartItemId,
      },
    });
    response.code(201);
    return response;
  }

  async getCartHandler(request) {
    const getCartUseCase = this._container.getInstance(GetCartUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const cartItems = await getCartUseCase.execute(user_id);

    return {
      status: 'success',
      data: {
        cartItems,
      },
    };
  }

  async putCartItemHandler(request) {
    const editCartItemUseCase = this._container.getInstance(EditCartItemUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const { id } = request.params;
    const payload = {
      ...request.payload,
      id,
      user_id,
    };

    const editedCartItem = await editCartItemUseCase.execute(payload);

    return {
      status: 'success',
      data: {
        cartItem: editedCartItem,
      },
    };
  }
}

module.exports = CartsHandler;
