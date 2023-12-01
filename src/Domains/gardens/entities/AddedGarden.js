class AddedGarden {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, user_id, name, type } = payload;

    this.id = id;
    this.user_id = user_id;
    this.name = name;
    this.type = type;
  }

  _verifyPayload({ id, user_id, name, type }) {
    if (!id || !user_id || !name || !type) {
      throw new Error('ADDED_GARDEN.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof id !== 'string' || typeof user_id !== 'string' || typeof name !== 'string' || typeof type !== 'string') {
      throw new Error('ADDED_GARDEN.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (type !== 'outdoor' && type !== 'indoor') {
      throw new Error('ADDED_GARDEN.TYPE_NOT_MEET_SPECIFICATION');
    }
  }
}

module.exports = AddedGarden;
