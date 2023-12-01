const AddGardenUseCase = require('../../../../Applications/use_case/AddGardenUseCase');
const GetGardensUseCase = require('../../../../Applications/use_case/GetGardensUseCase');
const GetGardenByIdUseCase = require('../../../../Applications/use_case/GetGardenByIdUseCase');
const DeleteGardenByIdUseCase = require('../../../../Applications/use_case/DeleteGardenByIdUseCase');

class GardensHandler {
  constructor(container) {
    this._container = container;

    this.postGardenHandler = this.postGardenHandler.bind(this);
    this.getGardensHandler = this.getGardensHandler.bind(this);
    this.getGardenByIdHandler = this.getGardenByIdHandler.bind(this);
    this.deleteGardenByIdHandler = this.deleteGardenByIdHandler.bind(this);
  }

  async postGardenHandler(request, h) {
    const addGardenUseCase = this._container.getInstance(AddGardenUseCase.name);

    const { name, type } = request.payload;
    const { id: user_id } = request.auth.credentials;

    const addedGarden = await addGardenUseCase.execute({ name, type, user_id });

    const response = h.response({
      status: 'success',
      data: {
        garden: addedGarden,
      },
    });
    response.code(201);
    return response;
  }

  async getGardensHandler(request, h) {
    const getGardensUseCase = await this._container.getInstance(GetGardensUseCase.name);

    const { id: user_id } = request.auth.credentials;

    const gardens = await getGardensUseCase.execute(user_id);

    const response = h.response({
      status: 'success',
      data: {
        gardens,
      },
    });
    response.code(200);
    return response;
  }

  async getGardenByIdHandler(request, h) {
    const getGardenByIdUseCase = await this._container.getInstance(GetGardenByIdUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const { id } = request.params;

    const garden = await getGardenByIdUseCase.execute({ user_id, id });

    const response = h.response({
      status: 'success',
      data: {
        garden,
      },
    });
    response.code(200);
    return response;
  }

  async deleteGardenByIdHandler(request, h) {
    const deleteGardenByIdUseCase = await this._container.getInstance(DeleteGardenByIdUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const { id } = request.params;

    const garden = await deleteGardenByIdUseCase.execute({ user_id, id });

    const response = h.response({
      status: 'success',
      data: {
        garden,
      },
    });
    response.code(200);
    return response;
  }
}

module.exports = GardensHandler;
