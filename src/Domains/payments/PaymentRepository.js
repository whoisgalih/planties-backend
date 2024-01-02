class PaymentRepository {
  async addPayment(payment) {
    throw new Error('PAYMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async getPayments() {
    throw new Error('PAYMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async getPaymentById() {
    throw new Error('PAYMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async deletePaymentById() {
    throw new Error('PAYMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = PaymentRepository;
