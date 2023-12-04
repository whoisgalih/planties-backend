class GetReminderById {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, user_id, garden_id } = payload;

    this.id = id;
    this.user_id = user_id;
    this.garden_id = garden_id;
  }

  _verifyPayload({ id, user_id, garden_id }) {
    if (!id || !user_id || !garden_id) {
      throw new Error('GET_REMINDER_BY_ID.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof id !== 'string' || typeof user_id !== 'string' || typeof garden_id !== 'string') {
      throw new Error('GET_REMINDER_BY_ID.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = GetReminderById;
