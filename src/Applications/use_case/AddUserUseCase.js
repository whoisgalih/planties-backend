const RegisterUser = require('../../Domains/users/entities/RegisterUser');

class AddUserUseCase {
  constructor({ userRepository, oxygenRepository, passwordHash, cartRepository, wishlistRepository }) {
    this._userRepository = userRepository;
    this._oxygenRepository = oxygenRepository;
    this._passwordHash = passwordHash;
    this._cartRepository = cartRepository;
    this._wishlistRepository = wishlistRepository;
  }

  async execute(useCasePayload) {
    const registerUser = new RegisterUser(useCasePayload);

    await this._userRepository.verifyAvailableEmail(registerUser.email);
    const oxygen = await this._oxygenRepository.addOxygen();
    registerUser.password = await this._passwordHash.hash(registerUser.password);
    const user = await this._userRepository.addUser(registerUser, oxygen.id);
    await this._cartRepository.createCart(user.id);
    await this._wishlistRepository.addWishlist(user.id);
    return user;
  }
}

module.exports = AddUserUseCase;
