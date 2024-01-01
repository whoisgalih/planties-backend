/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.renameColumn('users', 'profileImage', 'profile_image');
};

exports.down = (pgm) => {
  pgm.renameColumn('users', 'profile_image', 'profileImage');
};
