/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.alterColumn('marketplace_items', 'watering', {
    type: 'VARCHAR(50)',
    notNull: false,
  });

  pgm.alterColumn('marketplace_items', 'scale', {
    type: 'VARCHAR(50)',
    notNull: false,
  });

  pgm.alterColumn('marketplace_items', 'height', {
    type: 'VARCHAR(50)',
    notNull: false,
  });
};

exports.down = (pgm) => {
  pgm.alterColumn('marketplace_items', 'watering', {
    type: 'VARCHAR(50)',
    notNull: true,
  });

  pgm.alterColumn('marketplace_items', 'scale', {
    type: 'VARCHAR(50)',
    notNull: true,
  });

  pgm.alterColumn('marketplace_items', 'height', {
    type: 'VARCHAR(50)',
    notNull: true,
  });
};
