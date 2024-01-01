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
}

module.exports = GardenPhotoRepositoryPostgres;
