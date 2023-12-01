const AddedPlant = require('../../Domains/plants/entities/AddedPlant');
const GetPlant = require('../../Domains/plants/entities/GetPlant');

class DeletePlantByIdUseCase {
  constructor({ gardenRepository, plantRepository }) {
    this._gardenRepository = gardenRepository;
    this._plantRepository = plantRepository;
  }

  async execute(useCasePayload) {
    const deletePlant = new GetPlant(useCasePayload);

    await this._gardenRepository.verifyIfGardenExists(deletePlant.garden_id);
    await this._gardenRepository.verifyGardenOwner(deletePlant.user_id, deletePlant.garden_id);

    await this._plantRepository.verifyIfPlantExists(deletePlant.id);
    const plant = await this._plantRepository.deletePlantById(deletePlant.id);

    return new AddedPlant(plant);
  }
}

module.exports = DeletePlantByIdUseCase;
