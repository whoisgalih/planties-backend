class AddGarden {
  constructor(payload) {
    this._verifyPayload(payload);

    const { name, type, user_id } = payload;

    this.name = name;
    this.type = type;
    this.user_id = user_id;
  }

  _verifyPayload({ name, type, user_id }) {
    if (!name || !type || !user_id) {
      throw new Error('ADD_GARDEN.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof name !== 'string' || typeof type !== 'string' || typeof user_id !== 'string') {
      throw new Error('ADD_GARDEN.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (!(type === 'outdoor' || type === 'indoor')) {
      throw new Error('ADD_GARDEN.TYPE_NOT_MEET_SPECIFICATION');
    }
  }
}

module.exports = AddGarden;
