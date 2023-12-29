const routes = (handler) => [
  {
    method: 'POST',
    path: '/shipments',
    handler: handler.postShipmentHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
  {
    method: 'GET',
    path: '/shipments',
    handler: handler.getShipmentsHandler,
  },
  {
    method: 'GET',
    path: '/shipments/{id}',
    handler: handler.getShipmentByIdHandler,
  },
];

module.exports = routes;
