const routes = (handler) => [
  {
    method: 'POST',
    path: '/gardens/{garden_id}/photos',
    handler: handler.postGardenPhotoHandler,
    options: {
      auth: 'planties_jwt',
      payload: {
        maxBytes: process.env.MAX_FILE_SIZE,
      },
    },
  },
  {
    method: 'DELETE',
    path: '/gardens/{garden_id}/photos/{id}',
    handler: handler.deleteGardenPhotoByIdHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
];

module.exports = routes;
