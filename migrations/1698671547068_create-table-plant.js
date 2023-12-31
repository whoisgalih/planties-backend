/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('plants', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    garden_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    user_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    name: {
      type: 'TEXT',
      notNull: true,
    },
    banner: {
      type: 'TEXT',
    },
  });

  pgm.addConstraint('plants', 'fk_plants.garden_id_garden.id', 'FOREIGN KEY(garden_id) REFERENCES gardens(id) ON DELETE CASCADE');
  pgm.addConstraint('plants', 'fk_plants.user_id_user.id', 'FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  pgm.dropTable('plants');
};
