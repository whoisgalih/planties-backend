const Image = require('../../images/entities/Image');

class AddGarden {
  constructor(payload) {
    this._verifyPayload(payload);

    const { name, type, user_id, photos } = payload;

    this.name = name;
    this.type = type;
    this.user_id = user_id;
    this.photos = photos.map((photo) => new Image(photo));
  }

  _verifyPayload({ name, type, user_id, photos }) {
    if (!name || !type || !user_id || !photos) {
      throw new Error('ADD_GARDEN.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof name !== 'string' || typeof type !== 'string' || typeof user_id !== 'string' || !Array.isArray(photos)) {
      throw new Error('ADD_GARDEN.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    for (const photo of photos) {
      if (typeof photo !== 'string') {
        throw new Error('ADD_GARDEN.NOT_MEET_DATA_TYPE_SPECIFICATION');
      }
    }

    if (!(type === 'outdoor' || type === 'indoor')) {
      throw new Error('ADD_GARDEN.TYPE_NOT_MEET_SPECIFICATION');
    }
  }
}

module.exports = AddGarden;
