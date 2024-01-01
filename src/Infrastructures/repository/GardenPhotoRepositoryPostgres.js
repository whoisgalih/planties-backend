const GardenPhotoRepository = require('../../Domains/gardenPhotos/GardenPhotoRepository');

class GardenPhotoRepositoryPostgres extends GardenPhotoRepository {
  constructor(pool) {
    super();
    this._pool = pool;
  }

  async addGardenPhoto({ name: photo_id, garden_id }) {
    const query = {
      text: 'INSERT INTO garden_photos VALUES($1, $2) RETURNING id',
      values: [photo_id, garden_id],
    };

    const result = await this._pool.query(query);

    return result.rows[0];
  }

  async getAllGardenPhotos(garden_id) {
    const query = {
      text: 'SELECT id FROM garden_photos WHERE garden_id = $1',
      values: [garden_id],
    };

    const result = await this._pool.query(query);

    return result.rows;
  }

  async deleteGardenPhotoById(photo_id) {
    const query = {
      text: 'DELETE FROM garden_photos WHERE id = $1 RETURNING id',
      values: [photo_id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new NotFoundError('garden photo tidak ditemukan');
    }

    return result.rows[0];
  }
}

module.exports = GardenPhotoRepositoryPostgres;
