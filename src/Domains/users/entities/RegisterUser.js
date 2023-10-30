class RegisterUser {
  constructor(payload) {
    this._verifyPayload(payload);

    const { email, password, name } = payload;

    this.email = email;
    this.password = password;
    this.name = name;
  }

  _verifyPayload({ email, password, name }) {
    if (!email || !password || !name) {
      throw new Error('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof email !== 'string' || typeof password !== 'string' || typeof name !== 'string') {
      throw new Error('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (name.length > 50) {
      throw new Error('REGISTER_USER.NAME_LIMIT_CHAR');
    }

    if (email.length > 50) {
      throw new Error('REGISTER_USER.EMAIL_LIMIT_CHAR');
    }

    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      throw new Error('REGISTER_USER.EMAIL_CONTAIN_RESTRICTED_CHARACTER');
    }
  }
}

module.exports = RegisterUser;
