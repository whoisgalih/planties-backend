const AddTransactionUseCase = require('../../../../Applications/use_case/AddTransactionUseCase');

class TransactionHandler {
  constructor(container) {
    this._container = container;

    this.postTransactionHandler = this.postTransactionHandler.bind(this);
  }

  async postTransactionHandler(request, h) {
    const addTransactionUseCase = this._container.getInstance(AddTransactionUseCase.name);

    const { id: user_id } = request.auth.credentials;

    const addedTransaction = await addTransactionUseCase.execute({ ...request.payload, user_id });

    const response = h.response({
      status: 'success',
      data: {
        addedTransaction,
      },
    });
    response.code(201);
    return response;
  }
}

module.exports = TransactionHandler;
