const CartRepository = require('../../Domains/carts/CartRepository');
const InvariantError = require('../../Commons/exceptions/InvariantError');

class CartRepositoryPostgres extends CartRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async createCart(userId) {
    const id = `cart-${this._idGenerator()}`;
    const query = {
      text: 'INSERT INTO carts VALUES($1, $2) RETURNING id, user_id, is_active',
      values: [id, userId],
    };

    const result = await this._pool.query(query);

    return result.rows[0];
  }

  async getActiveCartId(userId) {
    const query = {
      text: 'SELECT id FROM carts WHERE user_id = $1 AND is_active',
      values: [userId],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new InvariantError('Cart tidak ditemukan');
    }

    return result.rows[0].id;
  }
}

module.exports = CartRepositoryPostgres;
