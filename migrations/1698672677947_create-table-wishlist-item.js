/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable('wishlist_items', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
        },
        wishlist_id:{
            type: 'VARCHAR(50)',
            notNull: true,
        },
        marketplace_item_id:{
            type: 'VARCHAR(50)',
            notNull: true,
        },
    });
    pgm.addConstraint('wishlist_items', 'fk_wishlist_items.wishlist_id_wishlist.id', 'FOREIGN KEY(wishlist_id) REFERENCES wishlists(id) ON DELETE CASCADE');
    pgm.addConstraint('wishlist_items', 'fk_wishlist_items.marketplace_item_id_marketplace_item.id', 'FOREIGN KEY(marketplace_item_id) REFERENCES marketplace_items(id) ON DELETE CASCADE');
};
  
exports.down = (pgm) => {
    pgm.dropTable('wishlist_items');
};
