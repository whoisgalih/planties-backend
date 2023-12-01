class GetGardensUseCase {
  constructor({ gardenRepository }) {
    this._gardenRepository = gardenRepository;
  }

  async execute(useCasePayload) {
    const gardens = await this._gardenRepository.getGardens(useCasePayload);
    return gardens;
  }
}

module.exports = GetGardensUseCase;
