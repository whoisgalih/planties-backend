const GetShipmentById = require('../../Domains/shipments/entities/GetShipmentById');

class GetShipmentByIdUseCase {
  constructor({ shipmentRepository }) {
    this._shipmentRepository = shipmentRepository;
  }

  async execute(useCasePayload) {
    const getShipmentById = new GetShipmentById(useCasePayload);

    const shipment = await this._shipmentRepository.getShipmentById(getShipmentById.id);

    return shipment;
  }
}

module.exports = GetShipmentByIdUseCase;
