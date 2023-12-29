const RegisterUser = require('../../../Domains/users/entities/RegisterUser');
const RegisteredUser = require('../../../Domains/users/entities/RegisteredUser');
const UserRepository = require('../../../Domains/users/UserRepository');
const OxygenRepository = require('../../../Domains/oxygens/OxygenRepository');
const CartRepository = require('../../../Domains/carts/CartRepository');
const WishlistRepository = require('../../../Domains/wishlists/WishlistRepository');

const PasswordHash = require('../../security/PasswordHash');
const AddUserUseCase = require('../AddUserUseCase');

describe('AddUserUseCase', () => {
  /**
   * Menguji apakah use case mampu mengoskestrasikan langkah demi langkah dengan benar.
   */
  it('should orchestrating the add user action correctly', async () => {
    // Arrange
    const useCasePayload = {
      name: 'Galih Akbar Nugraha',
      email: 'galih@planties.com',
      password: 'secret',
    };

    const expectedRegisteredUser = new RegisteredUser({
      id: 'user-123',
      oxygen_id: 'oxygen-123',
      email: useCasePayload.email,
      name: useCasePayload.name,
    });

    /** creating dependency of use case */
    const mockUserRepository = new UserRepository();
    const mockPasswordHash = new PasswordHash();
    const mockOxygenRepository = new OxygenRepository();
    const mockCartRepository = new CartRepository();
    const mockWishlistRepository = new WishlistRepository();

    /** mocking needed function */
    mockUserRepository.verifyAvailableEmail = jest.fn().mockImplementation(() => Promise.resolve());
    mockPasswordHash.hash = jest.fn().mockImplementation(() => Promise.resolve('encrypted_password'));
    mockUserRepository.addUser = jest.fn().mockImplementation(() => Promise.resolve(expectedRegisteredUser));
    mockOxygenRepository.addOxygen = jest.fn().mockImplementation(() => Promise.resolve({ id: 'oxygen-123' }));
    mockCartRepository.createCart = jest.fn().mockImplementation(() => Promise.resolve({ id: 'cart-123' }));
    mockWishlistRepository.addWishlist = jest.fn().mockImplementation(() => Promise.resolve({ id: 'wishlist-123' }));

    /** creating use case instance */
    const getUserUseCase = new AddUserUseCase({
      userRepository: mockUserRepository,
      passwordHash: mockPasswordHash,
      oxygenRepository: mockOxygenRepository,
      cartRepository: mockCartRepository,
      wishlistRepository: mockWishlistRepository,
    });

    // Action
    const registeredUser = await getUserUseCase.execute(useCasePayload);

    // Assert
    expect(registeredUser).toStrictEqual(expectedRegisteredUser);
    expect(mockUserRepository.verifyAvailableEmail).toBeCalledWith(useCasePayload.email);
    expect(mockPasswordHash.hash).toBeCalledWith(useCasePayload.password);
    expect(mockUserRepository.addUser).toBeCalledWith(
      new RegisterUser({
        name: useCasePayload.name,
        email: useCasePayload.email,
        password: 'encrypted_password',
      }),
      'oxygen-123'
    );
  });
});
