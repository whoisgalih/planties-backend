class GetTransactionsUseCase {
  constructor({ transactionRepository }) {
    this.transactionRepository = transactionRepository;
  }

  async execute(user_id) {
    return await this.transactionRepository.getAll(user_id);
  }
}

module.exports = GetTransactionsUseCase;
