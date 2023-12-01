const AddPlant = require('../../Domains/plants/entities/AddPlant');

class AddPlantUseCase {
  constructor({ gardenRepository, plantRepository }) {
    this._gardenRepository = gardenRepository;
    this._plantRepository = plantRepository;
  }

  async execute(useCasePayload) {
    const plant = new AddPlant(useCasePayload);

    await this._gardenRepository.verifyIfGardenExists(plant.garden_id);
    await this._gardenRepository.verifyGardenOwner(plant.user_id, plant.garden_id);

    return await this._plantRepository.addPlant(plant);
  }
}

module.exports = AddPlantUseCase;
