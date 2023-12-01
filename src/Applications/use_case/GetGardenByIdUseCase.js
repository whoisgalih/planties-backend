const GetGarden = require('../../Domains/garden/entities/GetGarden');

class GetGardenByIdUseCase {
  constructor({ gardenRepository }) {
    this.gardenRepository = gardenRepository;
  }

  async execute(useCasePayload) {
    console.log('GetGardenByIdUseCase');
    const garden = new GetGarden(useCasePayload);
    console.log(garden);

    await this.gardenRepository.verifyIfGardenExists(garden.id);
    console.log('garden exists');
    await this.gardenRepository.verifyGardenOwner(garden.user_id, garden.id);
    console.log('garden owner');

    const result = await this.gardenRepository.getGardenById(garden.id);
    console.log('get garden by id', result);
    return result;
  }
}

module.exports = GetGardenByIdUseCase;
