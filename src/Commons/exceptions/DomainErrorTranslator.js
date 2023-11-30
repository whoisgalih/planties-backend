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

  // Garden
  'ADD_GARDEN.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat kebun baru karena properti yang dibutuhkan tidak ada'),
  'ADD_GARDEN.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat kebun baru karena tipe data tidak sesuai'),
  'ADD_GARDEN.TYPE_NOT_MEET_SPECIFICATION': new InvariantError('tidak dapat membuat kebun baru karena tipe kebun tidak sesuai'),

  // Added Garden
  'ADDED_GARDEN.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat kebun baru karena properti yang dibutuhkan tidak ada'),
  'ADDED_GARDEN.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat kebun baru karena tipe data tidak sesuai'),
  'ADDED_GARDEN.TYPE_NOT_MEET_SPECIFICATION': new InvariantError('tidak dapat membuat kebun baru karena tipe kebun tidak sesuai'),

  // Refresh Authenticatioon
  'REFRESH_AUTHENTICATION_USE_CASE.NOT_CONTAIN_REFRESH_TOKEN': new InvariantError('harus mengirimkan token refresh'),
  'REFRESH_AUTHENTICATION_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('refresh token harus string'),

  // Delete Authenticatioon
  'DELETE_AUTHENTICATION_USE_CASE.NOT_CONTAIN_REFRESH_TOKEN': new InvariantError('harus mengirimkan token refresh'),
  'DELETE_AUTHENTICATION_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('refresh token harus string'),

  // Add Thread
  // 'ADD_THREAD.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat thread baru karena properti yang dibutuhkan tidak ada'),
  // 'ADD_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat thread baru karena tipe data tidak sesuai'),
  // 'ADD_THREAD.TITLE_LIMIT_CHAR': new InvariantError('tidak dapat membuat thread baru karena karakter judul melebihi batas limit'),
  // // Register User
  // 'REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat user baru karena properti yang dibutuhkan tidak ada'),
  // 'REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat user baru karena tipe data tidak sesuai'),
  // 'REGISTER_USER.USERNAME_LIMIT_CHAR': new InvariantError('tidak dapat membuat user baru karena karakter username melebihi batas limit'),
  // 'REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER': new InvariantError('tidak dapat membuat user baru karena username mengandung karakter terlarang'),
  // // Add Comment
  // 'ADD_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat comment baru karena properti yang dibutuhkan tidak ada'),
  // 'ADD_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat comment baru karena tipe data tidak sesuai'),
  // // Delete Comment
  // 'DELETE_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat mengahpus comment karena properti yang dibutuhkan tidak ada'),
  // 'DELETE_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat menghapus comment karena tipe data tidak sesuai'),
  // // Login
  // 'USER_LOGIN.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('harus mengirimkan username dan password'),
  // 'USER_LOGIN.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('username dan password harus string'),
  // // Comment In Thread
  // 'COMMENTS_IN_THREAD.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat mengambil comments karena properti yang dibutuhkan tidak ada'),
  // 'COMMENTS_IN_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat mengambil comments karena tipe data tidak sesuai'),
  // // Comment
  // 'COMMENT.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat mengambil comment karena properti yang dibutuhkan tidak ada'),
  // 'COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat mengambil comment karena tipe data tidak sesuai'),
  // // Get Thread
  // 'GET_THREAD.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat mengambil thread karena properti yang dibutuhkan tidak ada'),
  // 'GET_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat mengambil thread karena tipe data tidak sesuai'),
};

module.exports = DomainErrorTranslator;
