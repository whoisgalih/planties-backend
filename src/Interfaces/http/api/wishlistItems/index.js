const WishlistItemHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'wishlistItems',
  register: async (server, { container }) => {
    const wishlistItemHandler = new WishlistItemHandler(container);
    server.route(routes(wishlistItemHandler));
  },
};
