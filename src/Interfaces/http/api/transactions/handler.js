const AddTransactionUseCase = require('../../../../Applications/use_case/AddTransactionUseCase');
const GetTransactionsUseCase = require('../../../../Applications/use_case/GetTransactionsUseCase');

class TransactionHandler {
  constructor(container) {
    this._container = container;

    this.postTransactionHandler = this.postTransactionHandler.bind(this);
    this.getTransactionsHandler = this.getTransactionsHandler.bind(this);
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

  async getTransactionsHandler(request, h) {
    const getTransactionsUseCase = this._container.getInstance(GetTransactionsUseCase.name);

    const { id: user_id } = request.auth.credentials;

    const transactions = await getTransactionsUseCase.execute(user_id);

    const response = h.response({
      status: 'success',
      data: {
        transactions,
      },
    });
    response.code(200);

    return response;
  }
}

module.exports = TransactionHandler;
