const PlantPhotoHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'plantPhotos',
  register: async (server, { container }) => {
    const plantPhotoHandler = new PlantPhotoHandler(container);
    server.route(routes(plantPhotoHandler));
  },
};
