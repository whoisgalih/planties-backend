class DeleteAddressByIdUseCase {
  constructor({ addressRepository }) {
    this._addressRepository = addressRepository;
  }

  async execute(useCasePayload) {
    const { user_id, id } = useCasePayload;
    return await this._addressRepository.deleteAddressById({ user_id, id });
  }
}

module.exports = DeleteAddressByIdUseCase;
