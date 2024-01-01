const AddGardenPhotoUseCase = require('../../../../Applications/use_case/AddGardenPhotoUseCase');

class GardenPhotosHandler {
  constructor(container) {
    this._container = container;

    this.postGardenPhotoHandler = this.postGardenPhotoHandler.bind(this);
  }

  async postGardenPhotoHandler(request, h) {
    const addGardenPhotoUseCase = this._container.getInstance(AddGardenPhotoUseCase.name);

    const { garden_id } = request.params;
    const { id: user_id } = request.auth.credentials;
    const { photo } = request.payload;

    const addedGardenPhoto = await addGardenPhotoUseCase.execute({ garden_id, user_id, photo });

    const response = h.response({
      status: 'success',
      data: {
        garden_photo: addedGardenPhoto,
      },
    });
    response.code(201);
    return response;
  }
}

module.exports = GardenPhotosHandler;
