const routes = (handler) => [
  {
    method: 'POST',
    path: '/addresses',
    handler: handler.postAddressHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
];

module.exports = routes;
