const GardenRepository = require('../../Domains/garden/GardenRepository');
const AddedGarden = require('../../Domains/garden/entities/AddedGarden');

class GardenRepositoryPostgres extends GardenRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addGarden(addGarden) {
    const { name, type, user_id } = addGarden;
    const id = `garden-${this._idGenerator()}`;
    const query = {
      text: 'INSERT INTO gardens VALUES($1, $2, $3, $4) RETURNING id, user_id, name, type',
      values: [id, user_id, name, type],
    };

    const result = await this._pool.query(query);

    return new AddedGarden({ ...result.rows[0] });
  }

  async getGardens(user_id) {
    const query = {
      text: 'SELECT * FROM gardens WHERE user_id = $1',
      values: [user_id],
    };

    const result = await this._pool.query(query);

    return result.rows;
  }
}

module.exports = GardenRepositoryPostgres;
