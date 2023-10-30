/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable('garden', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
          },
        user_id:{
            type: 'VARCHAR(50)',
            notNull: true,
        },
        name:{
            type: 'TEXT',
            notNull: true,
        },
        type:{
            type: 'TEXT',
            notNull: true,
        },
    });

    pgm.addConstraint('garden', 'fk_garden.user_id_users.id', 'FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE');
};
  
exports.down = (pgm) => {
    pgm.dropTable('garden');
};
