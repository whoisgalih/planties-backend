const GetGarden = require('../../Domains/gardens/entities/GetGarden');

class DeleteGardenByIdUseCase {
  constructor({ gardenRepository }) {
    this._gardenRepository = gardenRepository;
  }

  async execute(useCasePayload) {
    const garden = new GetGarden(useCasePayload);

    await this._gardenRepository.verifyIfGardenExists(garden.id);
    await this._gardenRepository.verifyGardenOwner(garden.user_id, garden.id);

    const result = await this._gardenRepository.deleteGardenById(garden.id);

    return result;
  }
}

module.exports = DeleteGardenByIdUseCase;
