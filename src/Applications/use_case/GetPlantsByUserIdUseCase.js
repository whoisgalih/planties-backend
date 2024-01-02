class GetPlantsByUserIdUseCase {
  constructor({ plantRepository }) {
    this._plantRepository = plantRepository;
  }

  async execute(useCasePayload) {
    const { id } = useCasePayload;

    return this._plantRepository.getAllPlantsByUserId(id);
  }
}

module.exports = GetPlantsByUserIdUseCase;
