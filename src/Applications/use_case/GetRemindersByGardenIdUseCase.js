const GetReminders = require('../../Domains/reminders/entities/GetReminders');
const AddedReminder = require('../../Domains/reminders/entities/AddedReminder');

class GetRemindersByGardenIdUseCase {
  constructor({ gardenRepository, reminderRepository }) {
    this._gardenRepository = gardenRepository;
    this._reminderRepository = reminderRepository;
  }

  async execute(useCasePayload) {
    const getReminders = new GetReminders(useCasePayload);

    await this._gardenRepository.verifyIfGardenExists(getReminders.garden_id);
    await this._gardenRepository.verifyGardenOwner(getReminders.user_id, getReminders.garden_id);

    const reminders = await this._reminderRepository.getReminders(getReminders);

    return reminders.map((reminder) => new AddedReminder(reminder));
  }
}

module.exports = GetRemindersByGardenIdUseCase;
