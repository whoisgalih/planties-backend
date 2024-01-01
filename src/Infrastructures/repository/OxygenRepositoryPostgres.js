const OxygenRepository = require('../../Domains/oxygens/OxygenRepository');
const AddedOxygen = require('../../Domains/oxygens/entities/AddedOxygen');

class OxygenRepositoryPostgres extends OxygenRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addOxygen() {
    const id = `oxygen-${this._idGenerator()}`;
    const query = {
      text: 'INSERT INTO oxygen VALUES($1, $2) RETURNING id, oxygen',
      values: [id, 0],
    };

    const result = await this._pool.query(query);
    return new AddedOxygen({ ...result.rows[0] });
  }

  async getOxygenById(id) {
    const query = {
      text: 'SELECT * FROM oxygen WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);

    return result.rows[0];
  }

  async getOxygenRank() {
    const query = {
      // rank oxygen join users
      text: 'SELECT oxygen, RANK() OVER (ORDER BY oxygen DESC), name FROM oxygen INNER JOIN users ON oxygen.id = users.oxygen_id',
    };

    const result = await this._pool.query(query);

    return result.rows;
  }

  async getUserOxygenRank(user_id) {
    const query = {
      // rank oxygen join users
      text: 'SELECT oxygen, RANK() OVER (ORDER BY oxygen DESC) FROM oxygen INNER JOIN users ON oxygen.id = users.oxygen_id WHERE users.id = $1',
      values: [user_id],
    };

    const result = await this._pool.query(query);

    return result.rows[0];
  }
}

module.exports = OxygenRepositoryPostgres;
