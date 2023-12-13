const CartItemRepository = require('../../Domains/cartItems/CartItemRepository');
const InvariantError = require('../../Commons/exceptions/InvariantError');

class CartItemRepositoryPostgres extends CartItemRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addCartItem(cartItem) {
    const { cart_id, item, quantity } = cartItem;
    const id = `cart-item-${this._idGenerator()}`;
    const query = {
      text: 'INSERT INTO cart_items VALUES($1, $2, $3, $4) RETURNING id, cart_id, marketplace_item_id, quantity',
      values: [id, cart_id, item, quantity],
    };

    const result = await this._pool.query(query);

    return result.rows[0].id;
  }

  async verifyIfItemNotInCart(cart_id, item) {
    const query = {
      text: 'SELECT * FROM cart_items WHERE cart_id = $1 AND marketplace_item_id = $2',
      values: [cart_id, item],
    };

    const result = await this._pool.query(query);

    if (result.rowCount) {
      throw new InvariantError('Item sudah ada di dalam cart');
    }
  }
}

module.exports = CartItemRepositoryPostgres;
