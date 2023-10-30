/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable('addresses', {
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

    pgm.addconstraint('addresses', 'fk_addresses.user_id_user.id', 'FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE');
};
  
exports.down = (pgm) => {
    pgm.dropTable('addresses');
};
