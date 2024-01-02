const DeleteGardenPhotoById = require('../../Domains/gardenPhotos/entities/DeleteGardenPhotoById');

class DeleteGardenPhotoByIdUseCase {
  constructor({ gardenRepository, gardenPhotoRepository }) {
    this._gardenRepository = gardenRepository;
    this._gardenPhotoRepository = gardenPhotoRepository;
  }

  async execute(useCasePayload) {
    const deleteGardenPhotoById = new DeleteGardenPhotoById(useCasePayload);

    await this._gardenRepository.verifyGardenOwner(deleteGardenPhotoById.user_id, deleteGardenPhotoById.garden_id);

    return this._gardenPhotoRepository.deleteGardenPhotoById(deleteGardenPhotoById.id);
  }
}

module.exports = DeleteGardenPhotoByIdUseCase;
