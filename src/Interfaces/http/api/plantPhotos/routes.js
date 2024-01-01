const routes = (handler) => [
  {
    method: 'POST',
    path: '/gardens/{garden_id}/plants/{plant_id}/photos',
    handler: handler.postPlantPhotoHandler,
    options: {
      auth: 'planties_jwt',
      payload: {
        maxBytes: process.env.MAX_FILE_SIZE,
      },
    },
  },
];

module.exports = routes;
