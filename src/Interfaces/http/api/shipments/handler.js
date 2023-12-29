const AddShipmentUseCase = require('../../../../Applications/use_case/AddShipmentUseCase');

class ShipmentHandler {
  constructor(container) {
    this._container = container;

    this.postShipmentHandler = this.postShipmentHandler.bind(this);
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
}

module.exports = ShipmentHandler;
