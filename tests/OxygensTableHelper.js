const pool = require('../src/Infrastructures/database/postgres/pool');

const OxygensTableTestHelper = {
  async addOxygen({ id = 'oxygen-123', oxygen = 100 }) {
    const query = {
      text: 'INSERT INTO oxygens VALUES($1, $2)',
      values: [id, oxygen],
    };

    await pool.query(query);
  },
};
