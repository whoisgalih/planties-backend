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

  async getCartItems(user_id) {
    // join marketplace_items
    // join cart where is_active
    const query = {
      text: 'SELECT marketplace_items.id, marketplace_items.name, cart_items.quantity, marketplace_items.price, marketplace_items.discount, marketplace_items.cover FROM carts INNER JOIN cart_items ON cart_items.cart_id = carts.id INNER JOIN marketplace_items ON cart_items.marketplace_item_id = marketplace_items.id WHERE carts.user_id = $1 AND carts.is_active',
      values: [user_id],
    };

    const result = await this._pool.query(query);

    return result.rows;
  }
}

module.exports = CartItemRepositoryPostgres;
