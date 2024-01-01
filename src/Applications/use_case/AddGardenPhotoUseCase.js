const AddGardenPhoto = require('../../Domains/gardenPhotos/entities/AddGardenPhoto');

class AddGardenPhotoUseCase {
  constructor({ gardenRepository, gardenPhotoRepository, imageRepository }) {
    this._gardenRepository = gardenRepository;
    this._gardenPhotoRepository = gardenPhotoRepository;
    this._imageRepository = imageRepository;
  }

  async execute(useCasePayload) {
    const addGardenPhoto = new AddGardenPhoto(useCasePayload);

    await this._gardenRepository.verifyGardenOwner(addGardenPhoto.user_id, addGardenPhoto.garden_id);

    const { imageUrl, name } = await this._imageRepository.uploadImage(addGardenPhoto.photo, 'garden-photo');

    addGardenPhoto.name = name;

    const addedGardenPhoto = await this._gardenPhotoRepository.addGardenPhoto(addGardenPhoto);
    addedGardenPhoto.imageUrl = imageUrl;

    return addedGardenPhoto;
  }
}

module.exports = AddGardenPhotoUseCase;
