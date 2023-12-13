const routes = (handler) => [
  {
    method: 'POST',
    path: '/marketplace/carts',
    handler: handler.postCartHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
];

module.exports = routes;
