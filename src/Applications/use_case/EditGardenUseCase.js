const AddedGarden = require('../../Domains/gardens/entities/AddedGarden');

class EditGardenUseCase {
  constructor({ gardenRepository }) {
    this._gardenRepository = gardenRepository;
  }

  async execute(useCasePayload) {
    const editGarden = new AddedGarden(useCasePayload);

    await this._gardenRepository.verifyGardenOwner(editGarden.user_id, editGarden.id);
    return this._gardenRepository.editGardenById(editGarden);
  }
}

module.exports = EditGardenUseCase;
