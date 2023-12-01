class AddPlant {
  constructor(payload) {
    this._verifyPayload(payload);

    const { name, user_id, garden_id } = payload;

    this.name = name;
    this.user_id = user_id;
    this.garden_id = garden_id;
  }

  _verifyPayload({ name, user_id, garden_id }) {
    if (!name || !user_id || !garden_id) {
      throw new Error('ADD_PLANT.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof name !== 'string' || typeof user_id !== 'string' || typeof garden_id !== 'string') {
      throw new Error('ADD_PLANT.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddPlant;
