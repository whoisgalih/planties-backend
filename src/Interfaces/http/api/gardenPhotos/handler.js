const AddGardenPhotoUseCase = require('../../../../Applications/use_case/AddGardenPhotoUseCase');
const DeleteGardenPhotoByIdUseCase = require('../../../../Applications/use_case/DeleteGardenPhotoByIdUseCase');

class GardenPhotosHandler {
  constructor(container) {
    this._container = container;

    this.postGardenPhotoHandler = this.postGardenPhotoHandler.bind(this);
    this.deleteGardenPhotoByIdHandler = this.deleteGardenPhotoByIdHandler.bind(this);
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

  async deleteGardenPhotoByIdHandler(request, h) {
    const deleteGardenPhotoByIdUseCase = this._container.getInstance(DeleteGardenPhotoByIdUseCase.name);

    const { garden_id, id } = request.params;
    const { id: user_id } = request.auth.credentials;

    const deletedGardenPhoto = await deleteGardenPhotoByIdUseCase.execute({ garden_id, id, user_id });

    return {
      status: 'success',
      data: {
        garden_photo: deletedGardenPhoto,
      },
    };
  }
}

module.exports = GardenPhotosHandler;
