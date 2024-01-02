/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  // add auto date on colum date
  // alter column date to default now()
  pgm.alterColumn('transactions', 'date', {
    default: pgm.func('NOW()'),
  });
};

exports.down = (pgm) => {
  // remove default value
  pgm.alterColumn('transactions', 'date', {
    default: null,
  });
};
