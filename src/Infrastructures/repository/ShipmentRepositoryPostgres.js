const ShipmentRepository = require('../../Domains/shipments/ShipmentRepository');

const InvariantError = require('../../Commons/exceptions/InvariantError');

class ShipmentRepositoryPostgres extends ShipmentRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addShipment({ name, type, logo, price, eta }) {
    const id = `shipment-${this._idGenerator()}`;
    const query = {
      text: 'INSERT INTO shipments VALUES($1, $2, $3, $4, $5, $6) RETURNING id, name, type, logo, price, eta',
      values: [id, name, type, logo, price, eta],
    };

    const result = await this._pool.query(query);
    return result.rows[0];
  }

  async getShipments() {
    const query = {
      text: 'SELECT id, name, type, logo, price, eta FROM shipments',
    };

    const result = await this._pool.query(query);
    return result.rows;
  }

  async getShipmentById(id) {
    const query = {
      text: 'SELECT id, name, type, logo, price, eta FROM shipments WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new InvariantError('shipment tidak ditemukan');
    }

    return result.rows[0];
  }

  async deleteShipment(id) {
    const query = {
      text: 'DELETE FROM shipments WHERE id = $1 RETURNING id, name, type, logo, price, eta',
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new InvariantError('shipment tidak ditemukan');
    }

    return result.rows[0];
  }
}

module.exports = ShipmentRepositoryPostgres;
