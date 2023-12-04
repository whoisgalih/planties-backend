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
  {
    method: 'GET',
    path: '/gardens/{garden_id}/reminders/{id}',
    handler: handler.getReminderByIdHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/gardens/{garden_id}/reminders/{id}',
    handler: handler.putReminderByIdHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/gardens/{garden_id}/reminders/{id}',
    handler: handler.deleteReminderByIdHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
];

module.exports = routes;
