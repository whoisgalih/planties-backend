const PlantPhotoRepository = require('../../Domains/plantPhotos/PlantPhotoRepository');

class PlantPhotoRepositoryPostgres extends PlantPhotoRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
  }

  async addPlantPhoto({ name: photo_id, plant_id }) {
    const query = {
      text: 'INSERT INTO plant_photos VALUES($1, $2) RETURNING id',
      values: [photo_id, plant_id],
    };

    const result = await this._pool.query(query);

    return result.rows[0];
  }

  async getAllPlantPhotos(plant_id) {
    const query = {
      text: 'SELECT id FROM plant_photos WHERE plant_id = $1',
      values: [plant_id],
    };

    const result = await this._pool.query(query);

    return result.rows;
  }

  async deletePlantPhotoById(photo_id) {
    const query = {
      text: 'DELETE FROM plant_photos WHERE id = $1 RETURNING id',
      values: [photo_id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new NotFoundError('plant photo tidak ditemukan');
    }

    return result.rows[0];
  }
}

module.exports = PlantPhotoRepositoryPostgres;
