class GetAddressByIdUseCase {
  constructor({ addressRepository }) {
    this._addressRepository = addressRepository;
  }

  async execute(useCasePayload) {
    const { user_id, id } = useCasePayload;
    const address = await this._addressRepository.getAddressById({ user_id, id });

    return address;
  }
}

module.exports = GetAddressByIdUseCase;
