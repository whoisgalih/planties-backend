const AddGardenUseCase = require('../../../../Applications/use_case/AddGardenUseCase');
const GetGardensUseCase = require('../../../../Applications/use_case/GetGardensUseCase');

class GardensHandler {
  constructor(container) {
    this._container = container;

    this.postGardenHandler = this.postGardenHandler.bind(this);
    this.getGardensHandler = this.getGardensHandler.bind(this);
  }

  async postGardenHandler(request, h) {
    const addGardenUseCase = this._container.getInstance(AddGardenUseCase.name);

    const { name, type } = request.payload;
    const { id: user_id } = request.auth.credentials;

    const addedGarden = await addGardenUseCase.execute({ name, type, user_id });

    const response = h.response({
      status: 'success',
      data: {
        addedGarden,
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
}

module.exports = GardensHandler;
