/* eslint-disable camelcase */

exports.up = pgm => {
    pgm.createTable('oxygen', {
        id: {
          type: 'VARCHAR(50)',
          primaryKey: true,
        },
        oxygen: {
          type: 'float',
          notNull: true,
        },
      });
};

exports.down = pgm => {
    pgm.dropTable('oxygen');
};
