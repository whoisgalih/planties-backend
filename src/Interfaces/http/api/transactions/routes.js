const routes = (handler) => [
  {
    method: 'POST',
    path: '/transactions',
    handler: handler.postTransactionHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
];

module.exports = routes;
