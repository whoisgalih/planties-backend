const AddCartItemUseCase = require('../../../../Applications/use_case/AddCartItemUseCase');
const GetCartUseCase = require('../../../../Applications/use_case/GetCartUseCase');
const EditCartItemUseCase = require('../../../../Applications/use_case/EditCartItemUseCase');
const DeleteCartItemByIdUseCase = require('../../../../Applications/use_case/DeleteCartItemByIdUseCase');

class CartsHandler {
  constructor(container) {
    this._container = container;

    this.postCartHandler = this.postCartHandler.bind(this);
    this.getCartHandler = this.getCartHandler.bind(this);
    this.putCartItemHandler = this.putCartItemHandler.bind(this);
    this.deleteCartItemHandler = this.deleteCartItemHandler.bind(this);
  }

  async postCartHandler(request, h) {
    const addCartItemUseCase = this._container.getInstance(AddCartItemUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const payload = {
      ...request.payload,
      user_id,
    };

    const cartItem = await addCartItemUseCase.execute(payload);

    const response = h.response({
      status: 'success',
      data: {
        cartItem,
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

  async deleteCartItemHandler(request) {
    const deleteCartItemUseCase = this._container.getInstance(DeleteCartItemByIdUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const { id } = request.params;
    const payload = {
      id,
      user_id,
    };

    const deletedCartItem = await deleteCartItemUseCase.execute(payload);

    return {
      status: 'success',
      data: {
        cartItem: deletedCartItem,
      },
    };
  }
}

module.exports = CartsHandler;
