class EditReminder {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, name, type, duration, user_id, garden_id } = payload;

    this.id = id;
    this.name = name;
    this.type = type;
    this.duration = duration;
    this.user_id = user_id;
    this.garden_id = garden_id;
  }

  _verifyPayload({ id, name, type, duration, user_id, garden_id }) {
    console.log(id, name, type, duration, user_id, garden_id);
    if (!id || !name || !type || !duration || !user_id || !garden_id) {
      throw new Error('EDIT_REMINDER.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof id !== 'string' || typeof name !== 'string' || typeof type !== 'string' || typeof duration !== 'number' || typeof user_id !== 'string' || typeof garden_id !== 'string') {
      throw new Error('EDIT_REMINDER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (!(type === 'watering' || type === 'fertilization')) {
      throw new Error('EDIT_REMINDER.TYPE_NOT_MEET_SPECIFICATION');
    }
  }
}

module.exports = EditReminder;
