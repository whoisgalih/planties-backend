const EditAddress = require('../../Domains/addresses/entities/EditAddress');

class EditAddressUseCase {
  constructor({ addressRepository }) {
    this._addressRepository = addressRepository;
  }

  async execute(useCasePayload) {
    const editAddress = new EditAddress(useCasePayload);

    return await this._addressRepository.editAddress(editAddress);
  }
}

module.exports = EditAddressUseCase;
