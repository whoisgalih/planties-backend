class AddCartItem {
  constructor(payload) {
    this._verifyPayload(payload);

    const { user_id, item, quantity } = payload;

    this.user_id = user_id;
    this.item = item;
    this.quantity = quantity;
  }

  _verifyPayload({ user_id, item, quantity }) {
    if (!user_id || !item || quantity === null || quantity === undefined) {
      throw new Error('ADD_CART_ITEM.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof user_id !== 'string' || typeof item !== 'string' || typeof quantity !== 'number') {
      throw new Error('ADD_CART_ITEM.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (quantity < 0) {
      throw new Error('ADD_CART_ITEM.QUANTITY_LESS_THAN_ZERO');
    }
  }
}

module.exports = AddCartItem;
