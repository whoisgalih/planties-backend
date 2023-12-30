const AddShipmentUseCase = require('../../../../Applications/use_case/AddShipmentUseCase');
const GetShipmentsUseCase = require('../../../../Applications/use_case/GetShipmentsUseCase');
const GetShipmentByIdUseCase = require('../../../../Applications/use_case/GetShipmentByIdUseCase');
const DeleteShipmentByIdUseCase = require('../../../../Applications/use_case/DeleteShipmentByIdUseCase');

class ShipmentHandler {
  constructor(container) {
    this._container = container;

    this.postShipmentHandler = this.postShipmentHandler.bind(this);
    this.getShipmentsHandler = this.getShipmentsHandler.bind(this);
    this.getShipmentByIdHandler = this.getShipmentByIdHandler.bind(this);
    this.deleteShipmentByIdHandler = this.deleteShipmentByIdHandler.bind(this);
  }

  async postShipmentHandler(request, h) {
    const addShipmentUseCase = this._container.getInstance(AddShipmentUseCase.name);

    const { name, type, logo, price, eta } = request.payload;
    const { id: user_id } = request.auth.credentials;

    const addedShipment = await addShipmentUseCase.execute({ name, type, logo, price, eta, user_id });

    const response = h.response({
      status: 'success',
      data: {
        shipment: addedShipment,
      },
    });

    response.code(201);
    return response;
  }

  async getShipmentsHandler() {
    const getShipmentsUseCase = this._container.getInstance(GetShipmentsUseCase.name);
    const shipments = await getShipmentsUseCase.execute();
    return {
      status: 'success',
      data: {
        shipments,
      },
    };
  }

  async getShipmentByIdHandler(request) {
    const getShipmentByIdUseCase = this._container.getInstance(GetShipmentByIdUseCase.name);
    const { id } = request.params;
    const shipment = await getShipmentByIdUseCase.execute({ id });
    return {
      status: 'success',
      data: {
        shipment,
      },
    };
  }

  async deleteShipmentByIdHandler(request) {
    const deleteShipmentByIdUseCase = this._container.getInstance(DeleteShipmentByIdUseCase.name);
    const { id } = request.params;
    const { id: user_id } = request.auth.credentials;
    const shipment = await deleteShipmentByIdUseCase.execute({ id, user_id });
    return {
      status: 'success',
      data: {
        shipment,
      },
    };
  }
}

module.exports = ShipmentHandler;
