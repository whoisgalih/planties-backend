const NotFoundError = require('../../Commons/exceptions/NotFoundError');
const PlantRepository = require('../../Domains/plants/PlantRepository');

class PlantRepositoryPostgres extends PlantRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addPlant(addPlant) {
    const { name, user_id, garden_id, banner } = addPlant;
    const id = `plant-${this._idGenerator()}`;

    const query = {
      text: 'INSERT INTO plants VALUES($1, $2, $3, $4, $5) RETURNING id, name, banner, user_id, garden_id',
      values: [id, garden_id, user_id, name, banner],
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

  async verifyIfPlantExists(id) {
    const query = {
      text: 'SELECT * FROM plants WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new NotFoundError('plant tidak ditemukan');
    }
  }

  async getPlantById(id) {
    const query = {
      text: 'SELECT * FROM plants WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);

    return result.rows[0];
  }

  async deletePlantById(id) {
    const query = {
      text: 'DELETE FROM plants WHERE id = $1 RETURNING id, name, banner, user_id, garden_id',
      values: [id],
    };

    const result = await this._pool.query(query);

    return result.rows[0];
  }

  async getPlantCountByUserId(user_id) {
    const query = {
      // join garden
      text: 'SELECT COUNT(plants.id) FROM plants INNER JOIN gardens ON plants.garden_id = gardens.id WHERE gardens.user_id = $1',
      values: [user_id],
    };

    const result = await this._pool.query(query);

    return result.rows[0].count;
  }

  async verifyPlantOwner(user_id, plant_id) {
    const query = {
      // join garden
      text: 'SELECT plants.id FROM plants INNER JOIN gardens ON plants.garden_id = gardens.id WHERE plants.id = $1 AND gardens.user_id = $2',
      values: [plant_id, user_id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new AuthorizationError('Anda bukan pemilik plant ini');
    }
  }
}

module.exports = PlantRepositoryPostgres;
