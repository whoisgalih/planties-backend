const RoleRepository = require('../../Domains/roles/RoleRepository');

const AuthorizationError = require('../../Commons/exceptions/AuthorizationError');

class RoleRepositoryPostgres extends RoleRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async checkIfUserIsAdmin(userId) {
    const query = {
      text: 'SELECT users.id FROM users INNER JOIN role ON users.id = role.user_id WHERE users.id = $1 AND role.role = $2',
      values: [userId, 'admin'],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new AuthorizationError('user bukan admin');
    }
  }
}

module.exports = RoleRepositoryPostgres;
