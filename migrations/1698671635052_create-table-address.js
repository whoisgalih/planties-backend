/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable('address', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
        },
        user_id:{
            type: 'VARCHAR(50)',
            notNull: true,
        },
        address:{
            type: 'TEXT',
            notNull: true,
        },
        city:{
            type: 'TEXT',
            notNull: true,
        },
        province:{
            type: 'TEXT',
            notNull: true,
        },
        phone:{
            type: 'TEXT',
            notNull: true,
        },
        latitude:{
            type: 'float',
            notNull: true,
        },
        longtitude:{
            type: 'float',
            notNull: true,
        },
        postalcode:{
            type: 'TEXT',
            notNull: true,
        },
    });

    pgm.addConstraint('address', 'fk_address.user_id_users.id', 'FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE');
};
  
exports.down = (pgm) => {
    pgm.dropTable('address');
};
