const Hapi = require('@hapi/hapi');
const Jwt = require('@hapi/jwt');
const ClientError = require('../../Commons/exceptions/ClientError');
const DomainErrorTranslator = require('../../Commons/exceptions/DomainErrorTranslator');

// API
const users = require('../../Interfaces/http/api/users');
const authentications = require('../../Interfaces/http/api/authentications');
const gardens = require('../../Interfaces/http/api/gardens');
const plants = require('../../Interfaces/http/api/plants');
const reminders = require('../../Interfaces/http/api/reminders');
const marketplaceItems = require('../../Interfaces/http/api/marketplaceItems');
const carts = require('../../Interfaces/http/api/carts');
const wishlistItems = require('../../Interfaces/http/api/wishlistItems');
const shipments = require('../../Interfaces/http/api/shipments');
const gardenPhotos = require('../../Interfaces/http/api/gardenPhotos');
const plantPhotos = require('../../Interfaces/http/api/plantPhotos');
const oxygens = require('../../Interfaces/http/api/oxygens');
const payments = require('../../Interfaces/http/api/payments');

const createServer = async (container) => {
  const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT,
    debug: {
      request: ['error'],
    },
  });

  // registrasi plugin eksternal
  await server.register([
    {
      plugin: Jwt,
    },
  ]);

  // mendefinisikan strategy autentikasi jwt
  server.auth.strategy('planties_jwt', 'jwt', {
    keys: process.env.ACCESS_TOKEN_KEY,
    verify: {
      aud: false,
      iss: false,
      sub: false,
      maxAgeSec: process.env.ACCESS_TOKEN_AGE,
    },
    validate: (artifacts) => ({
      isValid: true,
      credentials: {
        id: artifacts.decoded.payload.id,
      },
    }),
  });

  await server.register([
    {
      plugin: users,
      options: { container },
    },
    {
      plugin: authentications,
      options: { container },
    },
    {
      plugin: gardens,
      options: { container },
    },
    {
      plugin: plants,
      options: { container },
    },
    {
      plugin: reminders,
      options: { container },
    },
    {
      plugin: marketplaceItems,
      options: { container },
    },
    {
      plugin: carts,
      options: { container },
    },
    {
      plugin: wishlistItems,
      options: { container },
    },
    {
      plugin: shipments,
      options: { container },
    },
    {
      plugin: gardenPhotos,
      options: { container },
    },
    {
      plugin: plantPhotos,
      options: { container },
    },
    {
      plugin: oxygens,
      options: { container },
    },
    {
      plugin: payments,
      options: { container },
    },
  ]);

  server.route({
    method: 'GET',
    path: '/',
    handler: () => ({
      value: 'Hello world!',
    }),
  });

  server.ext('onPreResponse', (request, h) => {
    // mendapatkan konteks response dari request
    const { response } = request;

    if (response instanceof Error) {
      // bila response tersebut error, tangani sesuai kebutuhan
      const translatedError = DomainErrorTranslator.translate(response);

      // penanganan client error secara internal.
      if (translatedError instanceof ClientError) {
        const newResponse = h.response({
          status: 'fail',
          message: translatedError.message,
        });
        newResponse.code(translatedError.statusCode);
        return newResponse;
      }

      // mempertahankan penanganan client error oleh hapi secara native, seperti 404, etc.
      if (!translatedError.isServer) {
        return h.continue;
      }

      // penanganan server error sesuai kebutuhan
      const newResponse = h.response({
        status: 'error',
        message: 'terjadi kegagalan pada server kami',
      });
      newResponse.code(500);
      return newResponse;
    }

    // jika bukan error, lanjutkan dengan response sebelumnya (tanpa terintervensi)
    return h.continue;
  });

  return server;
};

module.exports = createServer;
