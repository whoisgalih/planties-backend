const DeletePlantPhotoById = require('../../Domains/plantPhotos/entities/DeletePlantPhotoById');

class DeletePlantPhotoByIdUseCase {
  constructor({ plantRepository, plantPhotoRepository }) {
    this._plantRepository = plantRepository;
    this._plantPhotoRepository = plantPhotoRepository;
  }

  async execute(useCasePayload) {
    const deletePlantPhotoById = new DeletePlantPhotoById(useCasePayload);

    await this._plantRepository.verifyPlantOwner(deletePlantPhotoById.user_id, deletePlantPhotoById.plant_id);

    return this._plantPhotoRepository.deletePlantPhotoById(deletePlantPhotoById.id);
  }
}

module.exports = DeletePlantPhotoByIdUseCase;
