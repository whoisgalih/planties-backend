const Image = require('../../images/entities/Image');

class AddGardenPhoto {
  constructor(payload) {
    this._verifyPayload(payload);

    const { garden_id, user_id, photo } = payload;

    this.garden_id = garden_id;
    this.user_id = user_id;
    this.photo = new Image(photo);
  }

  _verifyPayload({ garden_id, user_id, photo }) {
    if (!garden_id || !user_id || !photo) {
      throw new Error('ADD_GARDEN_PHOTO.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof garden_id !== 'string' || typeof user_id !== 'string' || typeof photo !== 'string') {
      throw new Error('ADD_GARDEN_PHOTO.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddGardenPhoto;
