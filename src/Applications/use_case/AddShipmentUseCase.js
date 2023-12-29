const AddShipment = require('../../Domains/shipments/entities/AddShipment');

class AddShipmentUseCase {
  constructor({ roleRepository, shipmentRepository }) {
    this._roleRepository = roleRepository;
    this._shipmentRepository = shipmentRepository;
  }

  async execute(shipment) {
    const addShipment = new AddShipment(shipment);

    // check role
    await this._roleRepository.checkIfUserIsAdmin(addShipment.user_id);

    return await this._shipmentRepository.addShipment(addShipment);
  }
}

module.exports = AddShipmentUseCase;
