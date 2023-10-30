/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable('reminder', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
          },
        garden_id:{
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

   pgm.addConstraint('garden', 'fk_garden.garden_id_garden.id', 'FOREIGN KEY(garden_id) REFERENCES garden(id) ON DELETE CASCADE');
};
  
exports.down = (pgm) => {
    pgm.dropTable('reminder');
};
