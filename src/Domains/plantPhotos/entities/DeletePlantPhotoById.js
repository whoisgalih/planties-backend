class DeletePlantPhotoById {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, plant_id, user_id } = payload;

    this.id = id;
    this.plant_id = plant_id;
    this.user_id = user_id;
  }

  _verifyPayload({ id, plant_id, user_id }) {
    console.log(id, plant_id, user_id);
    if (!id || !plant_id || !user_id) {
      throw new Error('DELETE_PLANT_PHOTO.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof id !== 'string' || typeof plant_id !== 'string' || typeof user_id !== 'string') {
      throw new Error('DELETE_PLANT_PHOTO.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = DeletePlantPhotoById;
