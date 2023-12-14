const WishlistItemRepository = require('../../Domains/wishlistItems/WishlistItemRepository');
const InvariantError = require('../../Commons/exceptions/InvariantError');

class WishlistItemRepositoryPostgres extends WishlistItemRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addWishlistItem({ item, wishlist_id }) {
    const id = `wishlist-item-${this._idGenerator()}`;
    const query = {
      text: 'INSERT INTO wishlist_items VALUES($1, $2, $3) RETURNING id, wishlist_id, marketplace_item_id',
      values: [id, wishlist_id, item],
    };

    const result = await this._pool.query(query);
    return result.rows[0];
  }

  async verifyIfItemAlreadyExistInWishlist(item, wishlist_id) {
    const query = {
      text: 'SELECT * FROM wishlist_items WHERE wishlist_id = $1 AND marketplace_item_id = $2',
      values: [wishlist_id, item],
    };

    const result = await this._pool.query(query);

    if (result.rowCount) {
      throw new InvariantError('Item sudah ada di dalam wishlist');
    }
  }

  async getWishlistItems(user_id) {
    const query = {
      text: 'SELECT wishlist_items.id, wishlist_items.marketplace_item_id, marketplace_items.name, marketplace_items.price, marketplace_items.discount, marketplace_items.cover FROM wishlists INNER JOIN wishlist_items ON wishlist_items.wishlist_id = wishlists.id INNER JOIN marketplace_items ON wishlist_items.marketplace_item_id = marketplace_items.id WHERE wishlists.user_id = $1',
      values: [user_id],
    };

    const result = await this._pool.query(query);

    return result.rows;
  }
}

module.exports = WishlistItemRepositoryPostgres;
