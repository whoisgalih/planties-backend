const AddPayment = require('../../Domains/payments/entities/AddPayment');

class AddPaymentUseCase {
  constructor({ paymentRepository, roleRepository, imageRepository }) {
    this._paymentRepository = paymentRepository;
    this._roleRepository = roleRepository;
    this._imageRepository = imageRepository;
  }

  async execute(useCasePayload) {
    const addPayment = new AddPayment(useCasePayload);
    await this._roleRepository.checkIfUserIsAdmin(addPayment.user_id);

    const { imageUrl, name } = await this._imageRepository.uploadImage(addPayment.logo, 'payment-logo');
    addPayment.logo = name;

    const payment = await this._paymentRepository.addPayment(addPayment);
    payment.logo = imageUrl;

    return payment;
  }
}

module.exports = AddPaymentUseCase;
