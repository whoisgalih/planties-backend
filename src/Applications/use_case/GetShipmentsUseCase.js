class GetShipmentsUseCase {
  constructor({ shipmentRepository }) {
    this.shipmentRepository = shipmentRepository;
  }

  async execute() {
    return await this.shipmentRepository.getShipments();
  }
}

module.exports = GetShipmentsUseCase;
