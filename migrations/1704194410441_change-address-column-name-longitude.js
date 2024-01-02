/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.renameColumn('addresses', 'longtitude', 'longitude');
};

exports.down = (pgm) => {
  pgm.renameColumn('addresses', 'longitude', 'longtitude');
};
