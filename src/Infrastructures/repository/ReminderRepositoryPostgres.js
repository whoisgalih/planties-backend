const ReminderRepository = require('../../Domains/reminders/ReminderRepository');

const NotFoundError = require('../../Commons/exceptions/NotFoundError');

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

  async editReminder(editReminder) {
    const { id, name, type, duration } = editReminder;

    const query = {
      text: 'UPDATE reminders SET name = $1, type = $2, duration = $3 WHERE id = $4 RETURNING id, garden_id, name, type, duration',
      values: [name, type, duration, id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new NotFoundError('reminder tidak ditemukan');
    }

    return result.rows[0];
  }

  async verifyReminderOwner({ id, user_id }) {
    const query = {
      // join reminders and gardens table to verify if the reminder belongs to the user
      text: 'SELECT reminders.id FROM reminders INNER JOIN gardens ON reminders.garden_id = gardens.id WHERE reminders.id = $1 AND gardens.user_id = $2',
      values: [id, user_id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new NotFoundError('Anda tidak berhak mengakses reminder ini');
    }
  }

  async deleteReminderById(id) {
    const query = {
      text: 'DELETE FROM reminders WHERE id = $1 RETURNING id, garden_id, name, type, duration',
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
