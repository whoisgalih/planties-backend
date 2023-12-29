/* istanbul ignore file */
const pool = require('../src/Infrastructures/database/postgres/pool');

const UsersTableTestHelper = {
  async addUser({ id = 'user-123', oxygen_id = 'oxygen-123', email = 'galih@planties.com', password = 'secret', name = 'Dicoding Indonesia', profileImage = 'profile-image.png' }) {
    const query = {
      text: 'INSERT INTO users VALUES($1, $2, $3, $4, $5, $6)',
      values: [id, oxygen_id, email, password, name, profileImage],
    };

    await pool.query(query);
  },

  async findUsersById(id) {
    const query = {
      text: 'SELECT * FROM users WHERE id = $1',
      values: [id],
    };

    const result = await pool.query(query);
    return result.rows;
  },

  async cleanTable() {
    await pool.query('DELETE FROM users WHERE 1=1');
  },
};

module.exports = UsersTableTestHelper;
