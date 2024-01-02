const routes = (handler) => [
  {
    method: 'POST',
    path: '/addresses',
    handler: handler.postAddressHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
  {
    method: 'GET',
    path: '/addresses',
    handler: handler.getAddressesHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
  {
    method: 'GET',
    path: '/addresses/{id}',
    handler: handler.getAddressByIdHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
  {
    method: 'PUT',
    path: '/addresses/{id}',
    handler: handler.editAddressByIdHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
  {
    method: 'DELETE',
    path: '/addresses/{id}',
    handler: handler.deleteAddressByIdHandler,
    options: {
      auth: 'planties_jwt',
    },
  },
];

module.exports = routes;
