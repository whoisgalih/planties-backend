const routes = (handler) => [
  {
    method: 'POST',
    path: '/wishlists',
    handler: handler.postWishlistItemHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
  {
    method: 'GET',
    path: '/wishlists',
    handler: handler.getAllWishlistItemsHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
];

module.exports = routes;
