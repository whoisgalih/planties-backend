const GardenPhotosHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'gardenPhotos',
  register: async (server, { container }) => {
    const gardenPhotosHandler = new GardenPhotosHandler(container);
    server.route(routes(gardenPhotosHandler));
  },
};
