const AddPlant = require('../../Domains/plants/entities/AddPlant');
const AddedPlant = require('../../Domains/plants/entities/AddedPlant');

class AddPlantUseCase {
  constructor({ gardenRepository, plantRepository, plantPhotoRepository, imageRepository }) {
    this._gardenRepository = gardenRepository;
    this._plantRepository = plantRepository;
    this._plantPhotoRepository = plantPhotoRepository;
    this._imageRepository = imageRepository;
  }

  async execute(useCasePayload) {
    const addPlant = new AddPlant(useCasePayload);

    await this._gardenRepository.verifyIfGardenExists(addPlant.garden_id);
    await this._gardenRepository.verifyGardenOwner(addPlant.user_id, addPlant.garden_id);

    let imageUrl;

    if (addPlant.banner) {
      const { imageUrl: url, name } = await this._imageRepository.uploadImage(addPlant.banner, 'plant-banner');
      addPlant.banner = name;
      imageUrl = url;
    }

    const plant = await this._plantRepository.addPlant(addPlant);
    if (addPlant.banner) {
      plant.banner = imageUrl;
    }

    plant.photos = [];

    for (const photo of addPlant.photos) {
      const { imageUrl, name } = await this._imageRepository.uploadImage(photo, 'plant-photo');

      const plantPhoto = await this._plantPhotoRepository.addPlantPhoto({
        name,
        plant_id: plant.id,
      });

      plant.photos.push(imageUrl);
    }

    return new AddedPlant(plant);
  }
}

module.exports = AddPlantUseCase;
