/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('plant_photos', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    plant_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });

  pgm.addConstraint('plant_photos', 'fk_plant_photos.plant_id_plants.id', 'FOREIGN KEY(plant_id) REFERENCES plants(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  pgm.dropTable('plant_photos');
};
