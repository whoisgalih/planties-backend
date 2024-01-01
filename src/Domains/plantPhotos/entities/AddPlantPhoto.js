const Image = require('../../images/entities/Image');

class AddPlantPhoto {
  constructor(payload) {
    this._verifyPayload(payload);

    const { plant_id, user_id, photo } = payload;

    this.plant_id = plant_id;
    this.user_id = user_id;
    this.photo = new Image(photo);
  }

  _verifyPayload({ plant_id, user_id, photo }) {
    if (!plant_id || !user_id || !photo) {
      throw new Error('ADD_PLANT_PHOTO.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof plant_id !== 'string' || typeof user_id !== 'string' || typeof photo !== 'string') {
      throw new Error('ADD_PLANT_PHOTO.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddPlantPhoto;
