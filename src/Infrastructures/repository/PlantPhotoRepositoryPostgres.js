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
}

module.exports = PlantPhotoRepositoryPostgres;
