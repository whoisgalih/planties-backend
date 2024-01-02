const GardenRepository = require('../../Domains/gardens/GardenRepository');
const AddedGarden = require('../../Domains/gardens/entities/AddedGarden');

const NotFoundError = require('../../Commons/exceptions/NotFoundError');
const AuthorizationError = require('../../Commons/exceptions/AuthorizationError');

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

  async verifyIfGardenExists(id) {
    const query = {
      text: 'SELECT * FROM gardens WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new NotFoundError('garden tidak ditemukan');
    }
  }

  async verifyGardenOwner(user_id, garden_id) {
    const query = {
      text: 'SELECT * FROM gardens WHERE id = $1 AND user_id = $2',
      values: [garden_id, user_id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new AuthorizationError('Anda bukan pemilik garden ini');
    }
  }

  async getGardenById(id) {
    const query = {
      text: 'SELECT * FROM gardens WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);

    return new AddedGarden({ ...result.rows[0] });
  }

  async deleteGardenById(id) {
    const query = {
      text: 'DELETE FROM gardens WHERE id = $1 RETURNING id, user_id, name, type',
      values: [id],
    };

    const result = await this._pool.query(query);

    return new AddedGarden({ ...result.rows[0] });
  }

  async getGardenCountByUserId(user_id) {
    const query = {
      text: 'SELECT COUNT(id) FROM gardens WHERE user_id = $1',
      values: [user_id],
    };

    const result = await this._pool.query(query);

    return result.rows[0].count;
  }

  async editGardenById(editGarden) {
    const { id, name, type } = editGarden;

    const query = {
      text: 'UPDATE gardens SET name = $1, type = $2 WHERE id = $3 RETURNING id, user_id, name, type',
      values: [name, type, id],
    };

    const result = await this._pool.query(query);

    return new AddedGarden({ ...result.rows[0] });
  }
}

module.exports = GardenRepositoryPostgres;
