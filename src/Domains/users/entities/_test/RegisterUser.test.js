const RegisterUser = require('../RegisterUser');

describe('a RegisterUser entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      email: 'abc',
      password: 'abc',
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      email: 123,
      name: true,
      password: 'abc',
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should throw error when username contains more than 50 character', () => {
    // Arrange
    const payload = {
      email: 'dicodingindonesiadicodingindonesiadicodingindonesiadicoding',
      name: 'Dicoding Indonesia',
      password: 'abc',
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.EMAIL_LIMIT_CHAR');
  });

  it('should throw error when username contains restricted character', () => {
    // Arrange
    const payload = {
      email: 'dico ding',
      name: 'galih@planties.com',
      password: 'abc',
    };

    // Action and Assert
    expect(() => new RegisterUser(payload)).toThrowError('REGISTER_USER.EMAIL_NOT_VALID');
  });

  it('should create registerUser object correctly', () => {
    // Arrange
    const payload = {
      email: 'galih@planties.com',
      name: 'Dicoding Indonesia',
      password: 'abc',
    };

    // Action
    const { email, name, password } = new RegisterUser(payload);

    // Assert
    expect(email).toEqual(payload.email);
    expect(name).toEqual(payload.name);
    expect(password).toEqual(payload.password);
  });
});
