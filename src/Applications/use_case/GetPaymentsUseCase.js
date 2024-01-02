class GetPaymentsUseCase {
  constructor({ paymentRepository }) {
    this._paymentRepository = paymentRepository;
  }

  async execute() {
    const payments = await this._paymentRepository.getPayments();

    payments.forEach((payment) => {
      payment.logo = `${process.env.AWS_S3_PHOTO_BASE_URL}${payment.logo}`;
    });

    return payments;
  }
}

module.exports = GetPaymentsUseCase;
