const NotFoundError = require('../../Commons/exceptions/NotFoundError');
const AddressRepository = require('../../Domains/addresses/AddressRepository');

class AddressRepositoryPostgres extends AddressRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addAddress(addAddress) {
    const { user_id, title, recipient, address, city, province, phone, latitude, longitude, postalcode } = addAddress;

    const id = `address-${this._idGenerator()}`;
    const query = {
      text: 'INSERT INTO addresses VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id, title, recipient, address, city, province, phone, latitude, longitude, postalcode',
      values: [id, user_id, address, city, province, phone, latitude, longitude, postalcode, title, recipient],
    };

    const result = await this._pool.query(query);

    return result.rows[0];
  }

  async getAddresses(userId) {
    const query = {
      text: 'SELECT id, title, recipient, address FROM addresses WHERE user_id = $1',
      values: [userId],
    };

    const result = await this._pool.query(query);

    return result.rows;
  }

  async getAddressById({ user_id, id }) {
    const query = {
      text: 'SELECT * FROM addresses WHERE user_id = $1 AND id = $2',
      values: [user_id, id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new NotFoundError('address tidak ditemukan');
    }

    return result.rows[0];
  }

  async editAddress(editAddress) {
    const { id, user_id, title, recipient, address, city, province, phone, latitude, longitude, postalcode } = editAddress;

    const query = {
      text: 'UPDATE addresses SET title = $1, recipient = $2, address = $3, city = $4, province = $5, phone = $6, latitude = $7, longitude = $8, postalcode = $9 WHERE id = $10 AND user_id = $11 RETURNING id, title, recipient, address, city, province, phone, latitude, longitude, postalcode',
      values: [title, recipient, address, city, province, phone, latitude, longitude, postalcode, id, user_id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new NotFoundError('Gagal memperbarui address. Id tidak ditemukan');
    }

    return result.rows[0];
  }

  async deleteAddressById({ user_id, id }) {
    const query = {
      text: 'DELETE FROM addresses WHERE id = $1 AND user_id = $2 RETURNING id, title, recipient, address, city, province, phone, latitude, longitude, postalcode',
      values: [id, user_id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new NotFoundError('Gagal menghapus address. Id tidak ditemukan');
    }

    return result.rows[0];
  }
}

module.exports = AddressRepositoryPostgres;
