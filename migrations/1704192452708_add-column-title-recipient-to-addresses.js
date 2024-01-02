/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.addColumns('addresses', {
    title: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });
  pgm.addColumns('addresses', {
    recipient: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropColumns('addresses', 'title');
  pgm.dropColumns('addresses', 'recipient');
};
