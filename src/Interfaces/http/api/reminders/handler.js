const AddReminderUseCase = require('../../../../Applications/use_case/AddReminderUseCase');
const GetRemindersByGardenIdUseCase = require('../../../../Applications/use_case/GetRemindersByGardenIdUseCase');

class ReminderHandler {
  constructor(container) {
    this._container = container;

    this.postReminderHandler = this.postReminderHandler.bind(this);
    this.getRemindersByGardenIdHandler = this.getRemindersByGardenIdHandler.bind(this);
  }

  async postReminderHandler(request, h) {
    const addReminderUseCase = this._container.getInstance(AddReminderUseCase.name);

    const { name, type, duration } = request.payload;
    const { id: garden_id } = request.params;
    const { id: user_id } = request.auth.credentials;

    const addedReminder = await addReminderUseCase.execute({ name, type, duration, garden_id, user_id });

    const response = h.response({
      status: 'success',
      data: {
        reminder: addedReminder,
      },
    });

    response.code(201);
    return response;
  }

  async getRemindersByGardenIdHandler(request, h) {
    const getRemindersByGardenIdUseCase = this._container.getInstance(GetRemindersByGardenIdUseCase.name);

    const { id: garden_id } = request.params;
    const { id: user_id } = request.auth.credentials;

    const reminders = await getRemindersByGardenIdUseCase.execute({ garden_id, user_id });

    const response = h.response({
      status: 'success',
      data: {
        reminders,
      },
    });

    response.code(200);
    return response;
  }
}

module.exports = ReminderHandler;
