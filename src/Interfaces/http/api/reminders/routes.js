const routes = (handler) => [
  {
    method: 'POST',
    path: '/gardens/{id}/reminders',
    handler: handler.postReminderHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
];

module.exports = routes;
