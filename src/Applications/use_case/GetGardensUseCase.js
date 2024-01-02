class GetGardensUseCase {
  constructor({ gardenRepository, plantRepository }) {
    this._gardenRepository = gardenRepository;
    this._plantRepository = plantRepository;
  }

  async execute(useCasePayload) {
    const gardens = await this._gardenRepository.getGardens(useCasePayload);

    for (const garden of gardens) {
      const plants = await this._plantRepository.getPlantsBannerByGardenId(garden.id);
      garden.plantsBanner = plants.map((plant) => {
        if (plant.banner) {
          return `${process.env.AWS_S3_PHOTO_BASE_URL}${plant.banner}`;
        }
        return null;
      });
    }

    return gardens;
  }
}

module.exports = GetGardensUseCase;
