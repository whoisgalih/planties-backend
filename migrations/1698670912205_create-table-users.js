/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable('users', {
      id: {
        type: 'VARCHAR(50)',
        primaryKey: true,
      },
      oxygen_id: {
        type: 'VARCHAR(50)',
        notNull: true,
      },
      username: {
        type: 'VARCHAR(50)',
        notNull: true,
        unique: true,
      },
      email: {
        type: 'VARCHAR(50)',
        notNull: true,
        unique: true,
      },
      password: {
        type: 'TEXT',
        notNull: true,
      },
      fullname: {
        type: 'TEXT',
        notNull: true,
      },
      profileImage: {
        type: 'TEXT',
      },
    });
    pgm.addConstraint('users', 'fk_users.oxygen_id_oxygen.id', 'FOREIGN KEY(oxygen_id) REFERENCES oxygen(id) ON DELETE CASCADE');
  };
  
  exports.down = (pgm) => {
    pgm.dropTable('users');
  };
  

