const AddPlantPhoto = require('../../Domains/plantPhotos/entities/AddPlantPhoto');

class AddPlantPhotoUseCase {
  constructor({ plantRepository, plantPhotoRepository, imageRepository }) {
    this._plantRepository = plantRepository;
    this._plantPhotoRepository = plantPhotoRepository;
    this._imageRepository = imageRepository;
  }

  async execute(useCasePayload) {
    const addPlantPhoto = new AddPlantPhoto(useCasePayload);

    await this._plantRepository.verifyPlantOwner(addPlantPhoto.user_id, addPlantPhoto.plant_id);

    const { imageUrl, name } = await this._imageRepository.uploadImage(addPlantPhoto.photo, 'plant-photo');

    addPlantPhoto.name = name;

    const addedPlantPhoto = await this._plantPhotoRepository.addPlantPhoto(addPlantPhoto);
    addedPlantPhoto.imageUrl = imageUrl;

    return addedPlantPhoto;
  }
}
