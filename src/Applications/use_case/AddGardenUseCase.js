const AddGarden = require('../../Domains/gardens/entities/AddGarden');

class AddGardenUseCase {
  constructor({ gardenRepository }) {
    this._gardenRepository = gardenRepository;
  }

  async execute(useCasePayload) {
    const addGarden = new AddGarden(useCasePayload);
    return this._gardenRepository.addGarden(addGarden);
  }
}

module.exports = AddGardenUseCase;
