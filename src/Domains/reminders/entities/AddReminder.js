class AddReminder {
  constructor(payload) {
    this._verifyPayload(payload);

    const { name, type, duration, user_id, garden_id } = payload;

    this.name = name;
    this.type = type;
    this.duration = duration;
    this.user_id = user_id;
    this.garden_id = garden_id;
  }

  _verifyPayload({ name, type, duration, user_id, garden_id }) {
    if (!name || !type || !duration || !user_id || !garden_id) {
      throw new Error('ADD_REMINDER.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof name !== 'string' || typeof type !== 'string' || typeof duration !== 'number' || typeof user_id !== 'string' || typeof garden_id !== 'string') {
      throw new Error('ADD_REMINDER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (type !== 'watering' && type !== 'fertilization') {
      throw new Error('ADD_REMINDER.TYPE_NOT_MEET_SPECIFICATION');
    }
  }
}

module.exports = AddReminder;
