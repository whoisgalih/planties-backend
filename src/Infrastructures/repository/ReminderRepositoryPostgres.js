const ReminderRepository = require('../../Domains/reminders/ReminderRepository');

class ReminderRepositoryPostgres extends ReminderRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addReminder(addReminder) {
    const { garden_id, name, type, duration } = addReminder;
    const id = `reminder-${this._idGenerator()}`;
    const query = {
      text: 'INSERT INTO reminders VALUES($1, $2, $3, $4, $5) RETURNING id, garden_id, name, type, duration',
      values: [id, garden_id, name, type, duration],
    };

    const result = await this._pool.query(query);
    return result.rows[0];
  }

  async getReminders(getReminders) {
    const { garden_id } = getReminders;

    const query = {
      text: 'SELECT * FROM reminders WHERE garden_id = $1',
      values: [garden_id],
    };

    const result = await this._pool.query(query);
    return result.rows;
  }

  async getReminderById(id) {
    const query = {
      text: 'SELECT * FROM reminders WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new NotFoundError('reminder tidak ditemukan');
    }

    return result.rows[0];
  }
}

module.exports = ReminderRepositoryPostgres;
