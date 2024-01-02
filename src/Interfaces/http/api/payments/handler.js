const AddPaymentUseCase = require('../../../../Applications/use_case/AddPaymentUseCase');
const GetPaymentsUseCase = require('../../../../Applications/use_case/GetPaymentsUseCase');
const GetPaymentByIdUseCase = require('../../../../Applications/use_case/GetPaymentByIdUseCase');
const DeletePaymentByIdUseCase = require('../../../../Applications/use_case/DeletePaymentByIdUseCase');

class PaymentsHandler {
  constructor(container) {
    this._container = container;

    this.postPaymentHandler = this.postPaymentHandler.bind(this);
    this.getPaymentsHandler = this.getPaymentsHandler.bind(this);
    this.getPaymentByIdHandler = this.getPaymentByIdHandler.bind(this);
    this.deletePaymentByIdHandler = this.deletePaymentByIdHandler.bind(this);
  }

  async postPaymentHandler(request, h) {
    const addPaymentUseCase = this._container.getInstance(AddPaymentUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const { name, logo, fee } = request.payload;

    const addedPayment = await addPaymentUseCase.execute({ user_id, name, logo, fee });

    const response = h.response({
      status: 'success',
      data: {
        payment: addedPayment,
      },
    });
    response.code(201);
    return response;
  }

  async getPaymentsHandler(request, h) {
    const getPaymentsUseCase = await this._container.getInstance(GetPaymentsUseCase.name);

    const payments = await getPaymentsUseCase.execute();

    const response = h.response({
      status: 'success',
      data: {
        payments,
      },
    });
    response.code(200);
    return response;
  }

  async getPaymentByIdHandler(request, h) {
    const getPaymentByIdUseCase = await this._container.getInstance(GetPaymentByIdUseCase.name);

    const { id } = request.params;

    const payment = await getPaymentByIdUseCase.execute(id);

    const response = h.response({
      status: 'success',
      data: {
        payment,
      },
    });
    response.code(200);
    return response;
  }

  async deletePaymentByIdHandler(request, h) {
    const deletePaymentByIdUseCase = await this._container.getInstance(DeletePaymentByIdUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const { id } = request.params;

    const payment = await deletePaymentByIdUseCase.execute({ user_id, id });

    const response = h.response({
      status: 'success',
      data: {
        payment,
      },
    });
    response.code(200);
    return response;
  }
}

module.exports = PaymentsHandler;
