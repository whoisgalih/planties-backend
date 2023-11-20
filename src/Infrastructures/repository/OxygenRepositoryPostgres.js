const OxygenRepository = require('../../Domains/oxygen/OxygenRepository');
const AddedOxygen = require('../../Domains/oxygen/entities/AddedOxygen');

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
}

module.exports = OxygenRepositoryPostgres;
