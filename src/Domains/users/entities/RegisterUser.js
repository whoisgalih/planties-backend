class RegisterUser {
  constructor(payload) {
    this._verifyPayload(payload);

    const { name, email, password } = payload;

    this.name = name;
    this.email = email;
    this.password = password;
  }

  _verifyPayload({ name, email, password }) {
    if (!name || !email || !password) {
      throw new Error('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
      throw new Error('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (email.length > 50) {
      throw new Error('REGISTER_USER.EMAIL_LIMIT_CHAR');
    }

    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      throw new Error('REGISTER_USER.EMAIL_NOT_VALID');
    }
  }
}

module.exports = RegisterUser;
