/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable('shipments', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
        },
        name:{
            type: 'TEXT',
            notNull: true,
        },
        type:{
            type: 'TEXT',
            notNull: true,
        },
        logo:{
            type: 'TEXT',
            notNull: true,
        },
        price:{
            type: 'float',
            notNull: true,
        },
        eta:{
            type: 'int',
            notNull: true,
        },
    });
};
  
exports.down = (pgm) => {
    pgm.dropTable('shipments');
};
