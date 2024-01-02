const AddUserUseCase = require('../../../../Applications/use_case/AddUserUseCase');
const GetUserProfileUseCase = require('../../../../Applications/use_case/GetUserProfileUseCase');
const UpdateUserProfileUseCase = require('../../../../Applications/use_case/UpdateUserProfileUseCase');

class UsersHandler {
  constructor(container) {
    this._container = container;

    this.postUserHandler = this.postUserHandler.bind(this);
    this.getUserByIdHandler = this.getUserByIdHandler.bind(this);
    this.putUserHandler = this.putUserHandler.bind(this);
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

  async putUserHandler(request) {
    const updateUserProfileUseCase = this._container.getInstance(UpdateUserProfileUseCase.name);

    const { id } = request.auth.credentials;
    const { name, profile_image } = request.payload;

    const user = await updateUserProfileUseCase.execute({ id, name, profile_image });
    return {
      status: 'success',
      data: {
        user,
      },
    };
  }
}

module.exports = UsersHandler;
