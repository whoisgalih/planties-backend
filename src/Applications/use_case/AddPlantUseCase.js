const AddPlant = require('../../Domains/plants/entities/AddPlant');

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

    const plant = await this._plantRepository.addPlant(addPlant);
    plant.photos = [];

    for (const photo of addPlant.photos) {
      const { imageUrl, name } = await this._imageRepository.uploadImage(photo, 'plant-photo');

      const plantPhoto = await this._plantPhotoRepository.addPlantPhoto({
        name,
        plant_id: plant.id,
      });

      plant.photos.push(imageUrl);
    }

    return plant;
  }
}

module.exports = AddPlantUseCase;
