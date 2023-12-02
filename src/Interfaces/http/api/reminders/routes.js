const routes = (handler) => [
  {
    method: 'POST',
    path: '/gardens/{id}/reminders',
    handler: handler.postReminderHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
  {
    method: 'GET',
    path: '/gardens/{id}/reminders',
    handler: handler.getRemindersByGardenIdHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
];

module.exports = routes;