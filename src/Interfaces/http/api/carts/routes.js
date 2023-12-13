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
  {
    method: 'PUT',
    path: '/marketplace/carts/{id}',
    handler: handler.putCartItemHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/marketplace/carts/{id}',
    handler: handler.deleteCartItemHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
];

module.exports = routes;
