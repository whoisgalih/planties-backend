const AddCartItemUseCase = require('../../../../Applications/use_case/AddCartItemUseCase');

class CartsHandler {
  constructor(container) {
    this._container = container;

    this.postCartHandler = this.postCartHandler.bind(this);
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
}

module.exports = CartsHandler;
