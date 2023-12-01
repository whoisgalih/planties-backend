const GetGarden = require('../../Domains/gardens/entities/GetGarden');

class GetGardenByIdUseCase {
  constructor({ gardenRepository }) {
    this.gardenRepository = gardenRepository;
  }

  async execute(useCasePayload) {
    const garden = new GetGarden(useCasePayload);

    await this.gardenRepository.verifyIfGardenExists(garden.id);
    await this.gardenRepository.verifyGardenOwner(garden.user_id, garden.id);

    const result = await this.gardenRepository.getGardenById(garden.id);

    return result;
  }
}

module.exports = GetGardenByIdUseCase;
