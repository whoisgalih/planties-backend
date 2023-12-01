const routes = (handler) => [
  {
    method: 'POST',
    path: '/gardens',
    handler: handler.postGardenHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
  {
    method: 'GET',
    path: '/gardens',
    handler: handler.getGardensHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
  {
    method: 'GET',
    path: '/gardens/{id}',
    handler: handler.getGardenByIdHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
];

module.exports = routes;
