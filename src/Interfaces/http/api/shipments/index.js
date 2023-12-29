const ShipmentHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'shipments',
  register: async (server, { container }) => {
    const shipmentHandler = new ShipmentHandler(container);
    server.route(routes(shipmentHandler));
  },
};
