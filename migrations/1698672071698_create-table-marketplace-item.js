/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable('marketplace_item', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
        },
        name:{
            type: 'VARCHAR(50)',
            notNull: true,
        },
        cover:{
            type: 'TEXT',
            notNull: true,
        },
        price:{
            type: 'float',
            notNull: true,
        },
        discount:{
            type: 'float',
            notNull: true,
        },
        rating:{
            type: 'float',
            notNull: true,
        },
        sold:{
            type: 'int',
            notNull: true,
        },
        desc:{
            type: 'TEXT',
            notNull: true,
        },  
        watering:{
            type: 'int',
            notNull: true,
        },
        scale:{
            type: 'float',
            notNull: true,
        },
        height:{
            type: 'float',
            notNull: true,
        },
    });
};
  
exports.down = (pgm) => {
    pgm.dropTable('marketplace_item');
};
