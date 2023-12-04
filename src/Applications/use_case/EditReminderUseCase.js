const EditReminder = require('../../Domains/reminders/entities/EditReminder');

class EditReminderUseCase {
  constructor({ gardenRepository, reminderRepository }) {
    this._gardenRepository = gardenRepository;
    this._reminderRepository = reminderRepository;
  }

  async execute(useCasePayload) {
    const putReminder = new EditReminder(useCasePayload);

    await this._gardenRepository.verifyIfGardenExists(putReminder.garden_id);
    await this._gardenRepository.verifyGardenOwner(putReminder.user_id, putReminder.garden_id);

    return this._reminderRepository.editReminder(putReminder);
  }
}

module.exports = EditReminderUseCase;
