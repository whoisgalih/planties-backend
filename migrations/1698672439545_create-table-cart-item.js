/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable('cart_items', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
        },
        cart_id:{
            type: 'VARCHAR(50)',
            notNull: true,
        },
        marketplace_item_id:{
            type: 'VARCHAR(50)',
            notNull: true,
        },
        quantity:{
            type: 'int',
            notNull: true,
        },
    });
    pgm.addConstraint('cart_items', 'fk_cart_items.cart_id_cart.id', 'FOREIGN KEY(cart_id) REFERENCES carts(id) ON DELETE CASCADE');
    pgm.addConstraint('cart_items', 'fk_cart_items.marketplace_item_id_marketplace_item.id', 'FOREIGN KEY(marketplace_item_id) REFERENCES marketplace_items(id) ON DELETE CASCADE');
};
  
exports.down = (pgm) => {
    pgm.dropTable('cart_items');
};
