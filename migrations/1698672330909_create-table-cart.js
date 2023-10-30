/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable('carts', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
        },
        user_id:{
            type: 'VARCHAR(50)',
            notNull: true,
        }
    });
    pgm.addConstraint('carts', 'fk_carts.user_id_user.id', 'FOREIGN KEY(user_id) REFERENCES "user"(id) ON DELETE CASCADE');
};
  
exports.down = (pgm) => {
    pgm.dropTable('carts');
};
