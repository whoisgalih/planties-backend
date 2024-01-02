const AddPaymentUseCase = require('../../../../Applications/use_case/AddPaymentUseCase');

class PaymentsHandler {
  constructor(container) {
    this._container = container;

    this.postPaymentHandler = this.postPaymentHandler.bind(this);
  }

  async postPaymentHandler(request, h) {
    const addPaymentUseCase = this._container.getInstance(AddPaymentUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const { name, logo, fee } = request.payload;

    const addedPayment = await addPaymentUseCase.execute({ user_id, name, logo, fee });

    const response = h.response({
      status: 'success',
      data: {
        addedPayment,
      },
    });
    response.code(201);
    return response;
  }
}

module.exports = PaymentsHandler;
