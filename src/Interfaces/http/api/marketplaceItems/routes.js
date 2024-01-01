const routes = (handler) => [
  {
    method: 'POST',
    path: '/marketplace/items',
    handler: handler.postMarketplaceItemHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
  {
    method: 'GET',
    path: '/marketplace/items',
    handler: handler.getMarketplaceItemsHandler,
  },
  {
    method: 'GET',
    path: '/marketplace/items/{id}',
    handler: handler.getMarketplaceItemByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/marketplace/items/{id}',
    handler: handler.deleteMarketplaceItemByIdHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
];

module.exports = routes;
