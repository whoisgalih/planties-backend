const routes = (handler) => [
  {
    handler: handler.postMarketplaceItemHandler,
    method: 'POST',
    path: '/marketplace/items',
    options: {
      auth: 'planties_jwt',
    },
  },
];

module.exports = routes;
