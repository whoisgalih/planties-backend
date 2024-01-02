const routes = (handler) => [
  {
    method: 'POST',
    path: '/gardens',
    handler: handler.postGardenHandler,
    options: {
      auth: 'planties_jwt',
      payload: {
        maxBytes: process.env.MAX_FILE_SIZE,
      },
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
  {
    method: 'DELETE',
    path: '/gardens/{id}',
    handler: handler.deleteGardenByIdHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/gardens/{id}',
    handler: handler.putGardenByIdHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
];

module.exports = routes;
