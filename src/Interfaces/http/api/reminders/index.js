const ReminderHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'reminders',
  register: async (server, { container }) => {
    const remindersHandler = new ReminderHandler(container);
    server.route(routes(remindersHandler));
  },
};
