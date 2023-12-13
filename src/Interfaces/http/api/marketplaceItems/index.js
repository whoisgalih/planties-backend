const MarketplaceItemHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'marketplaceItems',
  register: async (server, { container }) => {
    const marketplaceItemHandler = new MarketplaceItemHandler(container);
    server.route(routes(marketplaceItemHandler));
  },
};
