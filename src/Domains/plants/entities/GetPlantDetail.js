class GetPlantDetail {
  constructor(payload) {
    payload.photos = payload.photos || [];

    this._verifyPayload(payload);

    const { id, name, banner, photos, user_id, garden_id } = payload;

    this.id = id;
    this.name = name;
    this.banner = banner;
    this.photos = photos;
    this.user_id = user_id;
    this.garden_id = garden_id;
  }

  _verifyPayload({ id, name, banner, photos, user_id, garden_id }) {
    if (!id || !name || !photos || !user_id || !garden_id) {
      throw new Error('ADDED_PLANT.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof id !== 'string' || typeof name !== 'string' || (typeof banner !== 'string' && banner !== null) || typeof user_id !== 'string' || typeof garden_id !== 'string' || !Array.isArray(photos)) {
      throw new Error('ADDED_PLANT.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    for (const photo of photos) {
      if (typeof photo !== 'string') {
        throw new Error('ADDED_PLANT.NOT_MEET_DATA_TYPE_SPECIFICATION');
      }
    }
  }
}

module.exports = GetPlantDetail;
