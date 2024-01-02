class GetUserRankUseCase {
  constructor({ oxygenRepository }) {
    this.oxygenRepository = oxygenRepository;
  }

  async execute(useCasePayload) {
    const { userId } = useCasePayload;

    const oxygen = await this.oxygenRepository.getUserOxygenRank(userId);

    oxygen.rank = parseInt(oxygen.rank);

    return oxygen;
  }
}

module.exports = GetUserRankUseCase;
