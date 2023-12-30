const DeleteShipmentById = require('../../Domains/shipments/entities/DeleteShipmentById');

class DeleteShipmentByIdUseCase {
  constructor({ roleRepository, shipmentRepository }) {
    this._roleRepository = roleRepository;
    this._shipmentRepository = shipmentRepository;
  }

  async execute(useCasePayload) {
    const getShipmentById = new DeleteShipmentById(useCasePayload);

    await this._roleRepository.checkIfUserIsAdmin(getShipmentById.user_id);
    return this._shipmentRepository.deleteShipment(getShipmentById.id);
  }
}

module.exports = DeleteShipmentByIdUseCase;
