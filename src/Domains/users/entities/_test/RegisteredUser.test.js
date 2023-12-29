const RegisteredUser = require('../RegisteredUser');

describe('a RegisteredUser entities', () => {
  it('should throw error when payload did not contain needed property', () => {
    // Arrange
    const payload = {
      email: 'galih@planties.com',
    };

    // Action and Assert
    expect(() => new RegisteredUser(payload)).toThrowError('REGISTERED_USER.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should throw error when payload did not meet data type specification', () => {
    // Arrange
    const payload = {
      id: 123,
      oxygen_id: 111,
      email: {},
      name: [],
      profileImage: 0,
    };

    // Action and Assert
    expect(() => new RegisteredUser(payload)).toThrowError('REGISTERED_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
  });

  it('should create registeredUser object correctly', () => {
    // Arrange
    const payload = {
      id: 'user-123',
      oxygen_id: 'oxygen-123',
      email: 'galih@planties.com',
      name: 'Galih Akbar Nugraha',
      profileImage: 'profile-image.png',
    };

    // Action
    const registeredUser = new RegisteredUser(payload);

    // Assert
    expect(registeredUser.id).toEqual(payload.id);
    expect(registeredUser.oxygen_id).toEqual(payload.oxygen_id);
    expect(registeredUser.email).toEqual(payload.email);
    expect(registeredUser.name).toEqual(payload.name);
    expect(registeredUser.profileImage).toEqual(payload.profileImage);
  });
});
