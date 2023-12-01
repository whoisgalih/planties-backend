const InvariantError = require('./InvariantError');

const DomainErrorTranslator = {
  translate(error) {
    return DomainErrorTranslator._directories[error.message] || error;
  },
};

DomainErrorTranslator._directories = {
  // Register User
  'REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada'),
  'REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat user baru karena tipe data tidak sesuai'),
  'REGISTER_USER.EMAIL_LIMIT_CHAR': new InvariantError('tidak dapat membuat user baru karena karakter email melebihi batas limit'),
  'REGISTER_USER.EMAIL_NOT_VALID': new InvariantError('tidak dapat membuat user baru karena email tidak valid'),

  // Registered User
  'REGISTERED_USER.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada'),
  'REGISTERED_USER.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat user baru karena tipe data tidak sesuai'),

  // Login User
  'USER_LOGIN.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada'),
  'USER_LOGIN.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat user baru karena tipe data tidak sesuai'),

  // Authentication
  'NEW_AUTH.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada'),
  'NEW_AUTH.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat user baru karena tipe data tidak sesuai'),

  // Refresh Authenticatioon
  'REFRESH_AUTHENTICATION_USE_CASE.NOT_CONTAIN_REFRESH_TOKEN': new InvariantError('harus mengirimkan token refresh'),
  'REFRESH_AUTHENTICATION_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('refresh token harus string'),

  // Delete Authenticatioon
  'DELETE_AUTHENTICATION_USE_CASE.NOT_CONTAIN_REFRESH_TOKEN': new InvariantError('harus mengirimkan token refresh'),
  'DELETE_AUTHENTICATION_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('refresh token harus string'),

  // Garden
  'ADD_GARDEN.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat kebun baru karena properti yang dibutuhkan tidak ada'),
  'ADD_GARDEN.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat kebun baru karena tipe data tidak sesuai'),
  'ADD_GARDEN.TYPE_NOT_MEET_SPECIFICATION': new InvariantError('tidak dapat membuat kebun baru karena tipe kebun tidak sesuai'),

  // Added Garden
  'ADDED_GARDEN.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat kebun baru karena properti yang dibutuhkan tidak ada'),
  'ADDED_GARDEN.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat kebun baru karena tipe data tidak sesuai'),
  'ADDED_GARDEN.TYPE_NOT_MEET_SPECIFICATION': new InvariantError('tidak dapat membuat kebun baru karena tipe kebun tidak sesuai'),

  // Get Garden
  'GET_GARDEN.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat mendapat kebun baru karena properti yang dibutuhkan tidak ada'),
  'GET_GARDEN.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat mendapat kebun baru karena tipe data tidak sesuai'),

  // Add Plant
  'ADD_PLANT.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat tanaman baru karena properti yang dibutuhkan tidak ada'),
  'ADD_PLANT.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat tanaman baru karena tipe data tidak sesuai'),

  // Get Plants In Garden
  'GET_PLANTS.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat mendapat tanaman baru karena properti yang dibutuhkan tidak ada'),
  'GET_PLANTS.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat mendapat tanaman baru karena tipe data tidak sesuai'),

  // Get Plants In Garden
  'GET_PLANT.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat mendapat tanaman baru karena properti yang dibutuhkan tidak ada'),
  'GET_PLANT.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat mendapat tanaman baru karena tipe data tidak sesuai'),
};

module.exports = DomainErrorTranslator;
