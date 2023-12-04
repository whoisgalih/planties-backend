/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('reminders', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    garden_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    name: {
      type: 'TEXT',
      notNull: true,
    },
    type: {
      type: 'TEXT',
      notNull: true,
    },
    duration: {
      type: 'DOUBLE PRECISION',
      notNull: true,
    },
  });

  pgm.addConstraint('reminders', 'fk_reminders.garden_id_garden.id', 'FOREIGN KEY(garden_id) REFERENCES gardens(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  pgm.dropTable('reminders');
};
