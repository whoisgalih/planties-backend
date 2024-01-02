const Image = require('../../images/entities/Image');

class AddPlant {
  constructor(payload) {
    payload.banner = payload.banner || null;

    this._verifyPayload(payload);

    const { name, user_id, garden_id, photos, banner } = payload;

    this.name = name;
    this.user_id = user_id;
    this.garden_id = garden_id;
    this.photos = photos.map((photo) => new Image(photo));
    this.banner = banner ? new Image(banner) : null;
  }

  _verifyPayload({ name, user_id, garden_id, photos, banner }) {
    if (!name || !user_id || !garden_id || !photos) {
      throw new Error('ADD_PLANT.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof name !== 'string' || typeof user_id !== 'string' || typeof garden_id !== 'string' || !Array.isArray(photos) || (banner !== null && typeof banner !== 'string')) {
      throw new Error('ADD_PLANT.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    for (const photo of photos) {
      if (typeof photo !== 'string') {
        throw new Error('ADD_PLANT.NOT_MEET_DATA_TYPE_SPECIFICATION');
      }
    }
  }
}

module.exports = AddPlant;
