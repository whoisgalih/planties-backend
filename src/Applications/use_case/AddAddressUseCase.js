const AddAddress = require('../../Domains/addresses/entities/AddAddress');

class AddAddressUseCase {
  constructor({ addressRepository }) {
    this._addressRepository = addressRepository;
  }

  async execute(useCasePayload) {
    const addAddress = new AddAddress(useCasePayload);

    const address = await this._addressRepository.addAddress(addAddress);

    return address;
  }
}

module.exports = AddAddressUseCase;
