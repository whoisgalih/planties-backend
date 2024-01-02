class GetPlantsByUserIdUseCase {
  constructor({ plantRepository }) {
    this._plantRepository = plantRepository;
  }

  async execute(useCasePayload) {
    const { id, limit } = useCasePayload;

    return this._plantRepository.getAllPlantsByUserId(id, limit);
  }
}

module.exports = GetPlantsByUserIdUseCase;
