const AddAddressUseCase = require('../../../../Applications/use_case/AddAddressUseCase');

class AddressesHandler {
  constructor(container) {
    this._container = container;

    this.postAddressHandler = this.postAddressHandler.bind(this);
  }

  async postAddressHandler(request, h) {
    const addAddressUseCase = this._container.getInstance(AddAddressUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const payload = request.payload;

    payload.user_id = user_id;

    const address = await addAddressUseCase.execute(payload);

    const response = h.response({
      status: 'success',
      data: {
        address,
      },
    });
    response.code(201);
    return response;
  }
}

module.exports = AddressesHandler;
