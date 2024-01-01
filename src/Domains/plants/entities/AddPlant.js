const Image = require('../../images/entities/Image');

class AddPlant {
  constructor(payload) {
    this._verifyPayload(payload);

    const { name, user_id, garden_id, photos } = payload;

    this.name = name;
    this.user_id = user_id;
    this.garden_id = garden_id;
    this.photos = photos.map((photo) => new Image(photo));
  }

  _verifyPayload({ name, user_id, garden_id, photos }) {
    if (!name || !user_id || !garden_id || !photos) {
      throw new Error('ADD_PLANT.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof name !== 'string' || typeof user_id !== 'string' || typeof garden_id !== 'string' || !Array.isArray(photos)) {
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
