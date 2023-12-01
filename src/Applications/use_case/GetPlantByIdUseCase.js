const GetPlant = require('../../Domains/plants/entities/GetPlant');
const AddedPlant = require('../../Domains/plants/entities/AddedPlant');

class GetPlantById {
  constructor({ gardenRepository, plantRepository }) {
    this._gardenRepository = gardenRepository;
    this._plantRepository = plantRepository;
  }

  async execute(payload) {
    const getPlant = new GetPlant(payload);

    await this._gardenRepository.verifyIfGardenExists(getPlant.garden_id);
    await this._gardenRepository.verifyGardenOwner(getPlant.user_id, getPlant.garden_id);

    const plant = await this._plantRepository.getPlantById(getPlant.id);

    return new AddedPlant(plant);
  }
}

module.exports = GetPlantById;
