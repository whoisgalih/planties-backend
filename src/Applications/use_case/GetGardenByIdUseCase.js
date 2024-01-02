const GetGarden = require('../../Domains/gardens/entities/GetGarden');

class GetGardenByIdUseCase {
  constructor({ gardenRepository, gardenPhotoRepository }) {
    this.gardenRepository = gardenRepository;
    this.gardenPhotoRepository = gardenPhotoRepository;
  }

  async execute(useCasePayload) {
    const garden = new GetGarden(useCasePayload);

    await this.gardenRepository.verifyIfGardenExists(garden.id);
    await this.gardenRepository.verifyGardenOwner(garden.user_id, garden.id);

    const result = await this.gardenRepository.getGardenById(garden.id);

    const gardenPhotos = await this.gardenPhotoRepository.getAllGardenPhotos(garden.id);
    result.photos = gardenPhotos.map((photo) => `${process.env.AWS_S3_PHOTO_BASE_URL}${photo.id}`);

    return result;
  }
}

module.exports = GetGardenByIdUseCase;
