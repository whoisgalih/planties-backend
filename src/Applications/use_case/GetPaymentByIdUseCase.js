class GetPaymentByIdUseCase {
  constructor({ paymentRepository }) {
    this.paymentRepository = paymentRepository;
  }

  async execute(paymentId) {
    console.log(paymentId);
    const payment = await this.paymentRepository.getPaymentById(paymentId);
    payment.logo = `${process.env.AWS_S3_PHOTO_BASE_URL}${payment.logo}`;
    return payment;
  }
}

module.exports = GetPaymentByIdUseCase;
