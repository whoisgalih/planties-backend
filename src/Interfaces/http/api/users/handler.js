const AddUserUseCase = require('../../../../Applications/use_case/AddUserUseCase');
const GetUserProfileUseCase = require('../../../../Applications/use_case/GetUserProfileUseCase');

class UsersHandler {
  constructor(container) {
    this._container = container;

    this.postUserHandler = this.postUserHandler.bind(this);
    this.getUserByIdHandler = this.getUserByIdHandler.bind(this);
  }

  async postUserHandler(request, h) {
    const addUserUseCase = this._container.getInstance(AddUserUseCase.name);
    const addedUser = await addUserUseCase.execute(request.payload);

    const response = h.response({
      status: 'success',
      data: {
        addedUser,
      },
    });
    response.code(201);
    return response;
  }

  async getUserByIdHandler(request) {
    const getUserProfileUseCase = this._container.getInstance(GetUserProfileUseCase.name);

    const { id } = request.auth.credentials;

    const user = await getUserProfileUseCase.execute(id);
    return {
      status: 'success',
      data: {
        user,
      },
    };
  }
}

module.exports = UsersHandler;
