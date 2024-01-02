const AddressesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'addresses',
  register: async (server, { container }) => {
    const addressesHandler = new AddressesHandler(container);
    server.route(routes(addressesHandler));
  },
};
