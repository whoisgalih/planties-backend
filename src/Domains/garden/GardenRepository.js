class GardenRepository {
  async addGarden(addGerden) {
    throw new Error('GARDEN_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async getGardens(user_id) {
    throw new Error('GARDEN_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async verifyIfGardenExists(id) {
    throw new Error('GARDEN_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async verifyGardenOwner(user_id, garden_id) {
    throw new Error('GARDEN_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }

  async getGardenById(id) {
    throw new Error('GARDEN_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  }
}

module.exports = GardenRepository;
