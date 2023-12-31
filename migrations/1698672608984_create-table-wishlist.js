/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable('wishlists', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
        },
        user_id:{
            type: 'VARCHAR(50)',
            notNull: true,
        }
    });
    pgm.addConstraint('wishlists', 'fk_wishlists.user_id_user.id', 'FOREIGN KEY(user_id) REFERENCES "users"(id) ON DELETE CASCADE');
};
  
exports.down = (pgm) => {
    pgm.dropTable('wishlists');
};
