const GetReminderById = require('../../Domains/reminders/entities/GetReminderById');

class DeleteReminderByIdUseCase {
  constructor({ gardenRepository, reminderRepository }) {
    this._gardenRepository = gardenRepository;
    this._reminderRepository = reminderRepository;
  }

  async execute(useCasePayload) {
    const { garden_id, user_id, id } = new GetReminderById(useCasePayload);

    console.log(this._gardenRepository);

    await this._gardenRepository.verifyIfGardenExists(garden_id);
    await this._reminderRepository.getReminderById(id);
    await this._reminderRepository.verifyReminderOwner({ id, user_id });

    return this._reminderRepository.deleteReminderById(id);
  }
}

module.exports = DeleteReminderByIdUseCase;
