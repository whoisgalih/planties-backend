const PlantsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'plants',
  register: async (server, { container }) => {
    const plantsHandler = new PlantsHandler(container);
    server.route(routes(plantsHandler));
  },
};
