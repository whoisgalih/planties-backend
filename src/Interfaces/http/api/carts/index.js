const routes = require('./routes');
const CartsHandler = require('./handler');

module.exports = {
  name: 'carts',
  register: async (server, { container }) => {
    const cartsHandler = new CartsHandler(container);
    server.route(routes(cartsHandler));
  },
};
