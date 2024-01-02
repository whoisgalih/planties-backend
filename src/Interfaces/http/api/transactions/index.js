const TransactionHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'transactions',
  register: async (server, { container }) => {
    const transactionHandler = new TransactionHandler(container);
    server.route(routes(transactionHandler));
  },
};
