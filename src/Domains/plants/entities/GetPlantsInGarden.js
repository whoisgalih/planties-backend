class GetPlantsInGarden {
  constructor(payload) {
    this._verifyPayload(payload);

    const { user_id, garden_id } = payload;

    this.user_id = user_id;
    this.garden_id = garden_id;
  }

  _verifyPayload({ user_id, garden_id }) {
    if (!user_id || !garden_id) {
      throw new Error('GET_PLANTS.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof user_id !== 'string' || typeof garden_id !== 'string') {
      throw new Error('GET_PLANTS.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = GetPlantsInGarden;
