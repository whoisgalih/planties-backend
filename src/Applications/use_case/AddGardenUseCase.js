const AddGarden = require('../../Domains/gardens/entities/AddGarden');

class AddGardenUseCase {
  constructor({ gardenRepository, gardenPhotoRepository, imageRepository }) {
    this._gardenRepository = gardenRepository;
    this._gardenPhotoRepository = gardenPhotoRepository;
    this._imageRepository = imageRepository;
  }

  async execute(useCasePayload) {
    const addGarden = new AddGarden(useCasePayload);

    const garden = await this._gardenRepository.addGarden(addGarden);
    garden.photos = [];

    for (const photo of addGarden.photos) {
      const { imageUrl, name } = await this._imageRepository.uploadImage(photo, 'garden-photo');
      const gardenPhoto = await this._gardenPhotoRepository.addGardenPhoto({ name, garden_id: garden.id });
      garden.photos.push(imageUrl);
    }

    return garden;
  }
}

module.exports = AddGardenUseCase;
