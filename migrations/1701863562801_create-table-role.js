/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('role', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    user_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    role: {
      type: 'VARCHAR(25)',
      notNull: true,
    },
  });
  pgm.addConstraint('role', 'fk_role.user_id_users.id', 'FOREIGN KEY(user_id) REFERENCES "users"(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  pgm.dropConstraint('role', 'fk_role.user_id_users.id');
  pgm.dropTable('role');
};
