const routes = (handler) => [
  {
    method: 'GET',
    path: '/oxygens',
    handler: handler.getOxygenLeaderboardHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
];

module.exports = routes;
