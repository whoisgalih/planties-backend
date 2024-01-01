const { up } = require('../../../migrations/1698670912205_create-table-users');
const UpdateUserProfile = require('../../Domains/users/entities/UpdateUserProfile');

class UpdateUserProfileUseCase {
  constructor({ userRepository, imageRepository }) {
    this._userRepository = userRepository;
    this._imageRepository = imageRepository;
  }

  async execute(useCasePayload) {
    const updateUserProfile = new UpdateUserProfile(useCasePayload);

    const { imageUrl, name } = await this._imageRepository.uploadImage(updateUserProfile.profile_image, 'profile-image');
    updateUserProfile.profile_image = name;

    const updatedUserProfile = await this._userRepository.updateUserProfile(updateUserProfile);
    updatedUserProfile.profile_image = imageUrl;

    return updatedUserProfile;
  }
}

module.exports = UpdateUserProfileUseCase;
