const routes = (handler) => [
  {
    method: 'POST',
    path: '/payments',
    handler: handler.postPaymentHandler,
    options: {
      auth: 'planties_jwt',
      payload: {
        maxBytes: process.env.MAX_FILE_SIZE,
      },
    },
  },
  {
    method: 'GET',
    path: '/payments',
    handler: handler.getPaymentsHandler,
  },
  {
    method: 'GET',
    path: '/payments/{id}',
    handler: handler.getPaymentByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/payments/{id}',
    handler: handler.deletePaymentByIdHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
];

module.exports = routes;
