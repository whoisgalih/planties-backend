const RegisterUser = require('../../Domains/users/entities/RegisterUser');

class AddUserUseCase {
  constructor({ userRepository, oxygenRepository, passwordHash }) {
    this._userRepository = userRepository;
    this._oxygenRepository = oxygenRepository;
    this._passwordHash = passwordHash;
  }

  async execute(useCasePayload) {
    const registerUser = new RegisterUser(useCasePayload);

    await this._userRepository.verifyAvailableEmail(registerUser.email);
    const oxygen = await this._oxygenRepository.addOxygen();
    registerUser.password = await this._passwordHash.hash(registerUser.password);
    return this._userRepository.addUser(registerUser, oxygen.id);
  }
}

module.exports = AddUserUseCase;
