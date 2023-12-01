/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable('payments', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
        },
        name:{
            type: 'TEXT',
            notNull: true,
        },
        logo:{
            type: 'TEXT',
            notNull: true,
        },
        fee:{
            type: 'float',
            notNull: true,
        },
    });
};
  
exports.down = (pgm) => {
    pgm.dropTable('payments');
};
