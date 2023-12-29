const routes = (handler) => [
  {
    method: 'POST',
    path: '/shipments',
    handler: handler.postShipmentHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
];

module.exports = routes;
