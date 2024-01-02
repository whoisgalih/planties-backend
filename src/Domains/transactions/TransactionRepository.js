class transactionRepository {
  async addTransaction(newTransaction) {
    throw new Error('TRANSACTION_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async getAll() {
    throw new Error('TRANSACTION_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = transactionRepository;
