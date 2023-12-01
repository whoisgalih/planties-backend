class RegisteredUser {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, oxygen_id, email, name, profileImage } = payload;

    this.id = id;
    this.oxygen_id = oxygen_id;
    this.email = email;
    this.name = name;
    this.profileImage = profileImage;
  }

  _verifyPayload({ id, oxygen_id, email, name, profileImage }) {
    if (!id || !oxygen_id || !email || !name) {
      throw new Error('REGISTERED_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof id !== 'string' || typeof oxygen_id !== 'string' || typeof email !== 'string' || typeof name !== 'string' || (typeof profileImage !== 'string' && typeof profileImage !== 'undefined')) {
      throw new Error('REGISTERED_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = RegisteredUser;
