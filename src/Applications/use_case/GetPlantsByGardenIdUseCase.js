const GetPlantsInGarden = require('../../Domains/plants/entities/GetPlantsInGarden');
const AddedPlant = require('../../Domains/plants/entities/AddedPlant');

class GetPlantsByGardenId {
  constructor({ gardenRepository, plantRepository }) {
    this._gardenRepository = gardenRepository;
    this._plantRepository = plantRepository;
  }

  async execute(useCasePayload) {
    const garden = new GetPlantsInGarden(useCasePayload);

    await this._gardenRepository.verifyIfGardenExists(garden.garden_id);
    await this._gardenRepository.verifyGardenOwner(garden.user_id, garden.garden_id);

    const plants = await this._plantRepository.getPlantsByGardenId(garden.garden_id);
    return plants.map((plant) => new AddedPlant(plant));
  }
}
module.exports = GetPlantsByGardenId;
