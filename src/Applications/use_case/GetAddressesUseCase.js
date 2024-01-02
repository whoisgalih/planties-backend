class GetAddressesUseCase {
  constructor({ addressRepository }) {
    this.addressRepository = addressRepository;
  }

  async execute(useCasePayload) {
    const { id } = useCasePayload;
    return this.addressRepository.getAddresses(id);
  }
}

module.exports = GetAddressesUseCase;
