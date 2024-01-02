class GetOxygenLeaderboardUseCase {
  constructor({ oxygenRepository }) {
    this.oxygenRepository = oxygenRepository;
  }

  async execute() {
    const oxygen = await this.oxygenRepository.getOxygenRank();

    return oxygen.map((o) => ({
      id: o.id,
      oxygen: o.oxygen,
      rank: parseInt(o.rank),
      name: o.name,
    }));
  }
}

module.exports = GetOxygenLeaderboardUseCase;
