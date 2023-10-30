/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable('wishlist_item', {
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
    pgm.addConstraint('wishlist_item', 'fk_wishlist_item.wishlist_id_wishlist.id', 'FOREIGN KEY(wishlist_id) REFERENCES wishlist(id) ON DELETE CASCADE');
    pgm.addConstraint('wishlist_item', 'fk_wishlist_item.marketplace_item_id_marketplace_item.id', 'FOREIGN KEY(marketplace_item_id) REFERENCES marketplace_item(id) ON DELETE CASCADE');
};
  
exports.down = (pgm) => {
    pgm.dropTable('wishlist_item');
};
