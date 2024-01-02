class GetGardensUseCase {
  constructor({ gardenRepository, gardenPhotoRepository }) {
    this._gardenRepository = gardenRepository;
    this._gardenPhotoRepository = gardenPhotoRepository;
  }

  async execute(useCasePayload) {
    const gardens = await this._gardenRepository.getGardens(useCasePayload);

    for (const garden of gardens) {
      const gardenPhotos = await this._gardenPhotoRepository.getAllGardenPhotos(garden.id, 3);
      garden.plantsBanner = gardenPhotos.map((gardenPhoto) => {
        return `${process.env.AWS_S3_PHOTO_BASE_URL}${gardenPhoto.id}`;
      });
    }

    return gardens;
  }
}

module.exports = GetGardensUseCase;
