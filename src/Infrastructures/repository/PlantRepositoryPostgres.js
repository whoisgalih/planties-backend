const PlantRepository = require('../../Domains/plants/PlantRepository');

class PlantRepositoryPostgres extends PlantRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addPlant(addPlant) {
    const { name, user_id, garden_id } = addPlant;
    const id = `plant-${this._idGenerator()}`;

    const query = {
      text: 'INSERT INTO plants VALUES($1, $2, $3, $4) RETURNING id, name, banner, user_id, garden_id',
      values: [id, garden_id, user_id, name],
    };

    const result = await this._pool.query(query);
    return result.rows[0];
  }

  async getPlantsByGardenId(garden_id) {
    const query = {
      text: 'SELECT * FROM plants WHERE garden_id = $1',
      values: [garden_id],
    };

    const result = await this._pool.query(query);

    return result.rows;
  }

  async getPlantById(id) {
    console.log(id);
    const query = {
      text: 'SELECT * FROM plants WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);

    console.log(result.rows);

    return result.rows[0];
  }
}

module.exports = PlantRepositoryPostgres;
