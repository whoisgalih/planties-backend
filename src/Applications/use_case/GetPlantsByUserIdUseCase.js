class GetPlantsByUserIdUseCase {
  constructor({ plantRepository }) {
    this._plantRepository = plantRepository;
  }

  async execute(useCasePayload) {
    const { id, limit } = useCasePayload;

    const plants = await this._plantRepository.getAllPlantsByUserId(id, limit);
    plants.forEach((plant) => {
      if (plant.banner) {
        plant.banner = `${process.env.AWS_S3_PHOTO_BASE_URL}${plant.banner}`;
      }
    });

    return plants;
  }
}

module.exports = GetPlantsByUserIdUseCase;
