/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable('plant', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
        },
        garden_id:{
            type: 'VARCHAR(50)',
            notNull: true,
        },
        user_id:{
            type: 'VARCHAR(50)',
            notNull: true,
        },
        name:{
            type: 'TEXT',
            notNull: true,
        },
        banner:{
            type: 'TEXT',
            notNull: true,
        },
    });

    pgm.addConstraint('plant', 'fk_plant.garden_id_garden.id', 'FOREIGN KEY(garden_id) REFERENCES garden(id) ON DELETE CASCADE');
    pgm.addConstraint('plant', 'fk_plant.user_id_users.id', 'FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE');
};
  
exports.down = (pgm) => {
    pgm.dropTable('plant');
};
