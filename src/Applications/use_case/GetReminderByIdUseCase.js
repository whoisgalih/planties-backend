const AddedReminder = require('../../Domains/reminders/entities/AddedReminder');
const GetReminderById = require('../../Domains/reminders/entities/GetReminderById');

class GetReminderByIdUseCase {
  constructor({ gardenRepository, reminderRepository }) {
    this._gardenRepository = gardenRepository;
    this._reminderRepository = reminderRepository;
  }

  async execute(useCasePayload) {
    const getReminder = new GetReminderById(useCasePayload);

    await this._gardenRepository.verifyIfGardenExists(getReminder.garden_id);
    await this._gardenRepository.verifyGardenOwner(getReminder.user_id, getReminder.garden_id);

    const reminder = await this._reminderRepository.getReminderById(getReminder.id);

    return new AddedReminder(reminder);
  }
}

module.exports = GetReminderByIdUseCase;
