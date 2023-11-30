const GardensHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'gardens',
  register: async (server, { container }) => {
    const gardensHandler = new GardensHandler(container);
    server.route(routes(gardensHandler));
  },
};
