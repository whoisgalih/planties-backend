const AddReminderUseCase = require('../../../../Applications/use_case/AddReminderUseCase');
const GetRemindersByGardenIdUseCase = require('../../../../Applications/use_case/GetRemindersByGardenIdUseCase');
const GetReminderByIdUseCase = require('../../../../Applications/use_case/GetReminderByIdUseCase');
const EditReminderUseCase = require('../../../../Applications/use_case/EditReminderUseCase');
const DeleteReminderByIdUseCase = require('../../../../Applications/use_case/DeleteReminderByIdUseCase');

class ReminderHandler {
  constructor(container) {
    this._container = container;

    this.postReminderHandler = this.postReminderHandler.bind(this);
    this.getRemindersByGardenIdHandler = this.getRemindersByGardenIdHandler.bind(this);
    this.getReminderByIdHandler = this.getReminderByIdHandler.bind(this);
    this.putReminderByIdHandler = this.putReminderByIdHandler.bind(this);
    this.deleteReminderByIdHandler = this.deleteReminderByIdHandler.bind(this);
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

  async getReminderByIdHandler(request, h) {
    const getReminderByIdUseCase = await this._container.getInstance(GetReminderByIdUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const { garden_id, id } = request.params;

    const reminder = await getReminderByIdUseCase.execute({ garden_id, id, user_id });

    const response = h.response({
      status: 'success',
      data: {
        reminder,
      },
    });

    response.code(200);
    return response;
  }

  async putReminderByIdHandler(request, h) {
    const editReminderUseCase = await this._container.getInstance(EditReminderUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const { garden_id, id } = request.params;
    const { name, type, duration } = request.payload;

    const editedReminder = await editReminderUseCase.execute({ id, name, type, duration, garden_id, user_id });

    const response = h.response({
      status: 'success',
      data: {
        reminder: editedReminder,
      },
    });

    response.code(200);
    return response;
  }

  async deleteReminderByIdHandler(request, h) {
    const deleteReminderByIdUseCase = await this._container.getInstance(DeleteReminderByIdUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const { garden_id, id } = request.params;

    const reminder = await deleteReminderByIdUseCase.execute({ id, garden_id, user_id });

    const response = h.response({
      status: 'success',
      data: {
        reminder,
      },
    });

    response.code(200);
    return response;
  }
}

module.exports = ReminderHandler;
