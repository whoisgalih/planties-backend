const ShipmentRepository = require('../../Domains/shipments/ShipmentRepository');

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
}

module.exports = ShipmentRepositoryPostgres;
