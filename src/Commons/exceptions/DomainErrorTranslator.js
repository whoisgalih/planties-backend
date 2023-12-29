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
  'GET_PLANTS.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat mendapat tanaman-tanaman karena properti yang dibutuhkan tidak ada'),
  'GET_PLANTS.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat mendapat tanaman-tanaman karena tipe data tidak sesuai'),

  // Get Plants In Garden
  'GET_PLANT.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat mendapat tanaman karena properti yang dibutuhkan tidak ada'),
  'GET_PLANT.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat mendapat tanaman karena tipe data tidak sesuai'),

  // Add Reminder
  'ADD_REMINDER.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat reminder baru karena properti yang dibutuhkan tidak ada'),
  'ADD_REMINDER.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat reminder baru karena tipe data tidak sesuai'),
  'ADD_REMINDER.TYPE_NOT_MEET_SPECIFICATION': new InvariantError('tidak dapat membuat reminder baru karena tipe reminder tidak sesuai'),

  // Added Reminder
  'ADDED_REMINDER.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('reminder yang ada tidak memiliki properti yang dibutuhkan tidak ada'),
  'ADDED_REMINDER.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('reminder yang ada tidak memiliki tipe data yang sesuai'),
  'ADDED_REMINDER.TYPE_NOT_MEET_SPECIFICATION': new InvariantError('reminder yang ada tidak memiliki tipe reminder yang sesuai'),

  // Edit Reminder
  'EDIT_REMINDER.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat mengubah reminder karena properti yang dibutuhkan tidak ada'),
  'EDIT_REMINDER.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat mengubah reminder karena tipe data tidak sesuai'),
  'EDIT_REMINDER.TYPE_NOT_MEET_SPECIFICATION': new InvariantError('tidak dapat mengubah reminder karena tipe reminder tidak sesuai'),

  // Add Marketplace Item
  'ADD_MARKETPLACE_ITEM.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat marketplace item baru karena properti yang dibutuhkan tidak ada'),
  'ADD_MARKETPLACE_ITEM.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat marketplace item baru karena tipe data tidak sesuai'),
  'ADD_MARKETPLACE_ITEM.DISCOUNT_NOT_MEET_SPECIFICATION': new InvariantError('tidak dapat membuat marketplace item baru karena diskon kurang dari 0 atau lebih dari 100'),

  // Added Marketplace Item
  'ADDED_MARKETPLACE_ITEM.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('marketplace item yang ada tidak memiliki properti yang dibutuhkan tidak ada'),
  'ADDED_MARKETPLACE_ITEM.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('marketplace item yang ada tidak memiliki tipe data yang sesuai'),
  'ADDED_MARKETPLACE_ITEM.DISCOUNT_NOT_MEET_SPECIFICATION': new InvariantError('marketplace item yang ada tidak memiliki diskon yang sesuai'),

  // Get Marketplace Item
  'GET_MARKETPLACE_ITEM.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat mendapat marketplace item karena properti yang dibutuhkan tidak ada'),
  'GET_MARKETPLACE_ITEM.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat mendapat marketplace item karena tipe data tidak sesuai'),

  // Add Cart Item
  'ADD_CART_ITEM.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat cart item baru karena properti yang dibutuhkan tidak ada'),
  'ADD_CART_ITEM.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat cart item baru karena tipe data tidak sesuai'),
  'ADD_CART_ITEM.QUANTITY_LESS_THAN_ZERO': new InvariantError('tidak dapat membuat cart item baru karena jumlah barang kurang dari 0'),

  // Add Item To Wishlist
  'ADD_ITEM_TO_WISHLIST.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat menambahkan item ke wishlist karena properti yang dibutuhkan tidak ada'),
  'ADD_ITEM_TO_WISHLIST.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat menambahkan item ke wishlist karena tipe data tidak sesuai'),

  // Add Shipment
  'ADD_SHIPMENT.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('tidak dapat membuat shipment baru karena properti yang dibutuhkan tidak ada'),
  'ADD_SHIPMENT.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('tidak dapat membuat shipment baru karena tipe data tidak sesuai'),
};

module.exports = DomainErrorTranslator;
