const WishlistRepository = require('../../Domains/wishlists/WishlistRepository');

class WishlistRepositoryPostgres extends WishlistRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addWishlist(user_id) {
    const id = `wishlist-${this._idGenerator()}`;
    const query = {
      text: 'INSERT INTO wishlists VALUES($1, $2) RETURNING id, user_id',
      values: [id, user_id],
    };

    const result = await this._pool.query(query);

    return result.rows[0];
  }

  async getWishlistByUserId(user_id) {
    const query = {
      text: 'SELECT id FROM wishlists WHERE user_id = $1',
      values: [user_id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      return null;
    }

    return result.rows[0].id;
  }
}

module.exports = WishlistRepositoryPostgres;
