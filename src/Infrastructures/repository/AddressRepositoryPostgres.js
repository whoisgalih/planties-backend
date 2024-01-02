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
      text: 'INSERT INTO addresses VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id, user_id, title, recipient, address, city, province, phone, latitude, longitude, postalcode',
      values: [id, user_id, address, city, province, phone, latitude, longitude, postalcode, title, recipient],
    };

    const result = await this._pool.query(query);

    return result.rows[0];
  }
}

module.exports = AddressRepositoryPostgres;
