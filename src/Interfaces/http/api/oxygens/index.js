const OxygenHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'oxygens',
  register: async (server, { container }) => {
    const oxygenHandler = new OxygenHandler(container);
    server.route(routes(oxygenHandler));
  },
};
