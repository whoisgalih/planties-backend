/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('marketplace_items', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    name: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    cover: {
      type: 'TEXT',
    },
    price: {
      type: 'float',
      notNull: true,
    },
    discount: {
      type: 'float',
      notNull: true,
    },
    rating: {
      type: 'float',
      notNull: true,
    },
    sold: {
      type: 'int',
      notNull: true,
    },
    desc: {
      type: 'TEXT',
      notNull: true,
    },
    watering: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    scale: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    height: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('marketplace_items');
};
