const routes = (handler) => [
  {
    method: 'POST',
    path: '/marketplace/carts',
    handler: handler.postCartHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
  {
    method: 'GET',
    path: '/marketplace/carts',
    handler: handler.getCartHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
];

module.exports = routes;
