const AddPlantPhotoUseCase = require('../../../../Applications/use_case/AddPlantPhotoUseCase');

class PlantPhotoHandler {
  constructor(container) {
    this._container = container;

    this.postPlantPhotoHandler = this.postPlantPhotoHandler.bind(this);
  }

  async postPlantPhotoHandler(request, h) {
    const addPlantPhotoUseCase = this._container.getInstance(AddPlantPhotoUseCase.name);

    const { id: user_id } = request.auth.credentials;
    const { plant_id } = request.params;
    const { photo } = request.payload;

    const addedPlantPhoto = await addPlantPhotoUseCase.execute({ user_id, plant_id, photo });

    const response = h.response({
      status: 'success',
      data: {
        plant_photo: addedPlantPhoto,
      },
    });
    response.code(201);
    return response;
  }
}

module.exports = PlantPhotoHandler;
