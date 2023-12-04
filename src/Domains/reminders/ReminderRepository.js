class ReminderRepository {
  async addReminder(addReminder) {
    throw new Error('REMINDER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async getRemindersByGardenId(garden_id) {
    throw new Error('REMINDER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async getReminderById(id) {
    throw new Error('REMINDER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = ReminderRepository;
