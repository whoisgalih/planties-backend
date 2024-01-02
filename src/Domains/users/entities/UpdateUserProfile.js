const Image = require('../../images/entities/Image');

class UpdateUserProfile {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, name, profile_image } = payload;

    this.id = id;
    this.name = name;
    this.profile_image = new Image(profile_image);
  }

  _verifyPayload({ id, name, profile_image }) {
    if (!id || !name || !profile_image) {
      throw new Error('UPDATE_USER_PROFILE.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof id !== 'string' || typeof name !== 'string' || typeof profile_image !== 'string') {
      throw new Error('UPDATE_USER_PROFILE.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = UpdateUserProfile;
