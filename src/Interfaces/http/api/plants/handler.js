const AddPlantUseCase = require('../../../../Applications/use_case/AddPlantUseCase');
const GetPlantsByGardenIdUseCase = require('../../../../Applications/use_case/GetPlantsByGardenIdUseCase');
const GetPlantByIdUseCase = require('../../../../Applications/use_case/GetPlantByIdUseCase');
const DeletePlantUseCase = require('../../../../Applications/use_case/DeletePlantByIdUseCase');

class PlantsHandler {
  constructor(container) {
    this._container = container;

    this.postPlantHandler = this.postPlantHandler.bind(this);
    this.getPlantsHandler = this.getPlantsHandler.bind(this);
    this.getPlantByIdHandler = this.getPlantByIdHandler.bind(this);
    this.deletePlantByIdHandler = this.deletePlantByIdHandler.bind(this);
  }

  async postPlantHandler(request, h) {
    const addPlantUseCase = this._container.getInstance(AddPlantUseCase.name);

    const { name } = request.payload;
    const { id: garden_id } = request.params;
    const { id: user_id } = request.auth.credentials;

    const addedPlant = await addPlantUseCase.execute({ name, garden_id, user_id });

    const response = h.response({
      status: 'success',
      data: {
        plant: addedPlant,
      },
    });

    response.code(201);
    return response;
  }

  async getPlantsHandler(request, h) {
    const getPlantsByGardenIdUseCase = this._container.getInstance(GetPlantsByGardenIdUseCase.name);

    const { id: garden_id } = request.params;
    const { id: user_id } = request.auth.credentials;

    const plants = await getPlantsByGardenIdUseCase.execute({ garden_id, user_id });

    const response = h.response({
      status: 'success',
      data: {
        plants,
      },
    });

    response.code(200);
    return response;
  }

  async getPlantByIdHandler(request, h) {
    const getPlantByIdUseCase = await this._container.getInstance(GetPlantByIdUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const { garden_id, plant_id } = request.params;

    const plant = await getPlantByIdUseCase.execute({ user_id, garden_id, id: plant_id });

    const response = h.response({
      status: 'success',
      data: {
        plant,
      },
    });

    response.code(200);
    return response;
  }

  async deletePlantByIdHandler(request, h) {
    const deletePlantUseCase = await this._container.getInstance(DeletePlantUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const { garden_id, plant_id } = request.params;

    const plant = await deletePlantUseCase.execute({ user_id, garden_id, id: plant_id });

    const response = h.response({
      status: 'success',
      data: {
        plant,
      },
    });

    response.code(200);
    return response;
  }
}

module.exports = PlantsHandler;
