const InvariantError = require('../../Commons/exceptions/InvariantError');
const RegisteredUser = require('../../Domains/users/entities/RegisteredUser');
const UserRepository = require('../../Domains/users/UserRepository');

class UserRepositoryPostgres extends UserRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async verifyAvailableEmail(email) {
    const query = {
      text: 'SELECT email FROM users WHERE email = $1',
      values: [email],
    };

    const result = await this._pool.query(query);

    if (result.rowCount) {
      throw new InvariantError('email tidak tersedia');
    }
  }

  async addUser(registerUser, oxygen_id) {
    const { name, email, password } = registerUser;
    const id = `user-${this._idGenerator()}`;

    const query = {
      text: 'INSERT INTO users VALUES($1, $2, $3, $4, $5) RETURNING id, oxygen_id, email, name',
      values: [id, oxygen_id, email, password, name],
    };

    const result = await this._pool.query(query);

    return new RegisteredUser({ ...result.rows[0] });
  }

  async getPasswordByEmail(email) {
    const query = {
      text: 'SELECT password FROM users WHERE email = $1',
      values: [email],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new InvariantError('email tidak ditemukan');
    }

    return result.rows[0].password;
  }

  async getIdByEmail(email) {
    const query = {
      text: 'SELECT id FROM users WHERE email = $1',
      values: [email],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new InvariantError('user tidak ditemukan');
    }

    const { id } = result.rows[0];

    return id;
  }

  async getUserById(id) {
    const query = {
      text: 'SELECT id, name, profile_image, oxygen_id FROM users WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new InvariantError('user tidak ditemukan');
    }

    return result.rows[0];
  }

  async updateUserProfile(updateUserProfile) {
    const { id, name, profile_image } = updateUserProfile;

    const query = {
      text: 'UPDATE users SET name = $1, profile_image = $2 WHERE id = $3 RETURNING name, profile_image',
      values: [name, profile_image, id],
    };

    const result = await this._pool.query(query);

    return result.rows[0];
  }
}

module.exports = UserRepositoryPostgres;
