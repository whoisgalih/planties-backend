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
];

module.exports = routes;
