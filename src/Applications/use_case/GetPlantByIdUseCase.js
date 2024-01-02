const GetPlant = require('../../Domains/plants/entities/GetPlant');
const GetPlantDetail = require('../../Domains/plants/entities/GetPlantDetail');

class GetPlantById {
  constructor({ gardenRepository, plantRepository, plantPhotoRepository }) {
    this._gardenRepository = gardenRepository;
    this._plantRepository = plantRepository;
    this._plantPhotoRepository = plantPhotoRepository;
  }

  async execute(payload) {
    const getPlant = new GetPlant(payload);

    await this._gardenRepository.verifyIfGardenExists(getPlant.garden_id);
    await this._gardenRepository.verifyGardenOwner(getPlant.user_id, getPlant.garden_id);

    const plant = await this._plantRepository.getPlantById(getPlant.id);
    if (plant.banner) {
      plant.banner = `${process.env.AWS_S3_PHOTO_BASE_URL}${plant.banner}`;
    }

    plant.photos = [];

    const plantPhotos = await this._plantPhotoRepository.getAllPlantPhotos(getPlant.id);
    plantPhotos.forEach((photo) => {
      plant.photos.push(`${process.env.AWS_S3_PHOTO_BASE_URL}${photo.id}`);
    });

    return new GetPlantDetail(plant);
  }
}

module.exports = GetPlantById;
