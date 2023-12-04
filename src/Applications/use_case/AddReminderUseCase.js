const AddReminder = require('../../Domains/reminders/entities/AddReminder');
const AddedReminder = require('../../Domains/reminders/entities/AddedReminder');

class AddReminderUseCase {
  constructor({ gardenRepository, reminderRepository }) {
    this._gardenRepository = gardenRepository;
    this._reminderRepository = reminderRepository;
  }

  async execute(useCasePayload) {
    const addReminder = new AddReminder(useCasePayload);

    await this._gardenRepository.verifyIfGardenExists(addReminder.garden_id);
    await this._gardenRepository.verifyGardenOwner(addReminder.user_id, addReminder.garden_id);

    const addedReminder = await this._reminderRepository.addReminder(addReminder);

    return new AddedReminder(addedReminder);
  }
}

module.exports = AddReminderUseCase;
