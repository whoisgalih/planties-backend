class GetUserProfileUseCase {
  constructor({ userRepository, gardenRepository, plantRepository, oxygenRepository }) {
    this._userRepository = userRepository;
    this._gardenRepository = gardenRepository;
    this._plantRepository = plantRepository;
    this._oxygenRepository = oxygenRepository;
  }

  async execute(userId) {
    const user = await this._userRepository.getUserById(userId);
    const gardenCount = await this._gardenRepository.getGardenCountByUserId(userId);
    const plantCount = await this._plantRepository.getPlantCountByUserId(userId);

    user.gardenCount = gardenCount;
    user.plantCount = plantCount;

    const oxygen = await this._oxygenRepository.getOxygenById(user.oxygen_id);

    user.oxygen = oxygen.oxygen;

    if (user.profile_image) {
      user.profile_image = `${process.env.AWS_S3_PHOTO_BASE_URL}${user.profile_image}`;
    }

    return {
      name: user.name,
      profile_image: user.profile_image,
      gardenCount: user.gardenCount,
      plantCount: user.plantCount,
      oxygen: user.oxygen,
    };
  }
}

module.exports = GetUserProfileUseCase;
