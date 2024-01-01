const routes = (handler) => [
  {
    method: 'POST',
    path: '/gardens/{garden_id}/photos',
    handler: handler.postGardenPhotoHandler,
    options: {
      auth: 'planties_jwt',
      payload: {
        maxBytes: 5000000,
      },
    },
  },
];

module.exports = routes;
