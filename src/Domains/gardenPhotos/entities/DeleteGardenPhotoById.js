class DeleteGardenPhotoById {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, garden_id, user_id } = payload;

    this.id = id;
    this.garden_id = garden_id;
    this.user_id = user_id;
  }

  _verifyPayload({ id, garden_id, user_id }) {
    if (!id || !garden_id || !user_id) {
      throw new Error('DELETE_GARDEN_PHOTO.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof id !== 'string' || typeof garden_id !== 'string' || typeof user_id !== 'string') {
      throw new Error('DELETE_GARDEN_PHOTO.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = DeleteGardenPhotoById;
