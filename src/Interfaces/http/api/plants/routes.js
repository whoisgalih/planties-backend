const routes = (handler) => [
  {
    method: 'POST',
    path: '/gardens/{id}/plants',
    handler: handler.postPlantHandler,
    options: {
      auth: 'planties_jwt',
      payload: {
        maxBytes: process.env.MAX_FILE_SIZE,
      },
    },
  },
  {
    method: 'GET',
    path: '/gardens/{id}/plants',
    handler: handler.getPlantsHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
  {
    method: 'GET',
    path: '/gardens/{garden_id}/plants/{plant_id}',
    handler: handler.getPlantByIdHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/gardens/{garden_id}/plants/{plant_id}',
    handler: handler.deletePlantByIdHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
];

module.exports = routes;
