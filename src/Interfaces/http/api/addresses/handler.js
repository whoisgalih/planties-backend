const AddAddressUseCase = require('../../../../Applications/use_case/AddAddressUseCase');
const GetAddressesUseCase = require('../../../../Applications/use_case/GetAddressesUseCase');
const GetAddressByIdUseCase = require('../../../../Applications/use_case/GetAddressByIdUseCase');
const EditAddressByIdUseCase = require('../../../../Applications/use_case/EditAddressByIdUseCase');
const DeleteAddressByIdUseCase = require('../../../../Applications/use_case/DeleteAddressByIdUseCase');

class AddressesHandler {
  constructor(container) {
    this._container = container;

    this.postAddressHandler = this.postAddressHandler.bind(this);
    this.getAddressesHandler = this.getAddressesHandler.bind(this);
    this.getAddressByIdHandler = this.getAddressByIdHandler.bind(this);
    this.editAddressByIdHandler = this.editAddressByIdHandler.bind(this);
    this.deleteAddressByIdHandler = this.deleteAddressByIdHandler.bind(this);
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

  async getAddressesHandler(request, h) {
    const getAddressesUseCase = await this._container.getInstance(GetAddressesUseCase.name);

    const { id } = request.auth.credentials;

    const addresses = await getAddressesUseCase.execute({ id });

    const response = h.response({
      status: 'success',
      data: {
        addresses,
      },
    });
    response.code(200);
    return response;
  }

  async getAddressByIdHandler(request, h) {
    const getAddressByIdUseCase = await this._container.getInstance(GetAddressByIdUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const { id } = request.params;

    console.log(user_id, id);

    const address = await getAddressByIdUseCase.execute({ user_id, id });

    const response = h.response({
      status: 'success',
      data: {
        address,
      },
    });
    response.code(200);
    return response;
  }

  async editAddressByIdHandler(request, h) {
    const editAddressByIdUseCase = await this._container.getInstance(EditAddressByIdUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const { id } = request.params;
    const payload = request.payload;

    const address = await editAddressByIdUseCase.execute({ user_id, id, ...payload });

    const response = h.response({
      status: 'success',
      data: {
        address,
      },
    });
    response.code(200);
    return response;
  }

  async deleteAddressByIdHandler(request, h) {
    const deleteAddressByIdUseCase = await this._container.getInstance(DeleteAddressByIdUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const { id } = request.params;

    const address = await deleteAddressByIdUseCase.execute({ user_id, id });

    const response = h.response({
      status: 'success',
      data: {
        address,
      },
    });
    response.code(200);
    return response;
  }
}

module.exports = AddressesHandler;
