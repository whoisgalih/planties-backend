const UserRepository = require('../../../Domains/users/UserRepository');
const AuthenticationRepository = require('../../../Domains/authentications/AuthenticationRepository');
const AuthenticationTokenManager = require('../../security/AuthenticationTokenManager');
const PasswordHash = require('../../security/PasswordHash');
const LoginUserUseCase = require('../LoginUserUseCase');
const NewAuth = require('../../../Domains/authentications/entities/NewAuth');

describe('GetAuthenticationUseCase', () => {
  it('should orchestrating the get authentication action correctly', async () => {
    // Arrange
    const useCasePayload = {
      email: 'galih@planties.com',
      password: 'secret',
    };
    const expectedAuthentication = new NewAuth({
      accessToken: 'access_token',
      refreshToken: 'refresh_token',
    });
    const mockUserRepository = new UserRepository();
    const mockAuthenticationRepository = new AuthenticationRepository();
    const mockAuthenticationTokenManager = new AuthenticationTokenManager();
    const mockPasswordHash = new PasswordHash();

    // Mocking
    mockUserRepository.getPasswordByEmail = jest.fn().mockImplementation(() => Promise.resolve('encrypted_password'));
    mockPasswordHash.comparePassword = jest.fn().mockImplementation(() => Promise.resolve());
    mockAuthenticationTokenManager.createAccessToken = jest.fn().mockImplementation(() => Promise.resolve(expectedAuthentication.accessToken));
    mockAuthenticationTokenManager.createRefreshToken = jest.fn().mockImplementation(() => Promise.resolve(expectedAuthentication.refreshToken));
    mockUserRepository.getIdByEmail = jest.fn().mockImplementation(() => Promise.resolve('user-123'));
    mockAuthenticationRepository.addToken = jest.fn().mockImplementation(() => Promise.resolve());

    // create use case instance
    const loginUserUseCase = new LoginUserUseCase({
      userRepository: mockUserRepository,
      authenticationRepository: mockAuthenticationRepository,
      authenticationTokenManager: mockAuthenticationTokenManager,
      passwordHash: mockPasswordHash,
    });

    // Action
    const actualAuthentication = await loginUserUseCase.execute(useCasePayload);

    // Assert
    expect(actualAuthentication).toEqual(expectedAuthentication);
    expect(mockUserRepository.getPasswordByEmail).toBeCalledWith('galih@planties.com');
    expect(mockPasswordHash.comparePassword).toBeCalledWith('secret', 'encrypted_password');
    expect(mockUserRepository.getIdByEmail).toBeCalledWith('galih@planties.com');
    expect(mockAuthenticationTokenManager.createAccessToken).toBeCalledWith({ email: 'galih@planties.com', id: 'user-123' });
    expect(mockAuthenticationTokenManager.createRefreshToken).toBeCalledWith({ email: 'galih@planties.com', id: 'user-123' });
    expect(mockAuthenticationRepository.addToken).toBeCalledWith(expectedAuthentication.refreshToken);
  });
});
