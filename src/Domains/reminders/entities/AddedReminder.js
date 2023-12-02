class AddedReminder {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, name, type, duration, garden_id } = payload;

    this.id = id;
    this.name = name;
    this.type = type;
    this.duration = duration;
    this.garden_id = garden_id;
  }

  _verifyPayload({ id, name, type, duration, garden_id }) {
    if (!id || !name || !type || !duration || !garden_id) {
      throw new Error('ADDED_REMINDER.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof id !== 'string' || typeof name !== 'string' || typeof duration !== 'number' || typeof type !== 'string' || typeof garden_id !== 'string') {
      throw new Error('ADDED_REMINDER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (type !== 'watering' && type !== 'fertilization') {
      throw new Error('ADDED_REMINDER.TYPE_NOT_MEET_SPECIFICATION');
    }
  }
}

module.exports = AddedReminder;
