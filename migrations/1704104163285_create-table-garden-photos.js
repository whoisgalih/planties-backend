/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('garden_photos', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    garden_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });

  pgm.addConstraint('garden_photos', 'fk_garden_photos.garden_id_gardens.id', 'FOREIGN KEY(garden_id) REFERENCES gardens(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  pgm.dropTable('garden_photos');
};
