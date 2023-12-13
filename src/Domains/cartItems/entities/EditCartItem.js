class EditCartItem {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, user_id, quantity } = payload;

    this.id = id;
    this.user_id = user_id;
    this.quantity = quantity;
  }

  _verifyPayload({ id, user_id, quantity }) {
    if (!id || !user_id || quantity === null || quantity === undefined) {
      throw new Error('EDIT_CART_ITEM.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof id !== 'string' || typeof user_id !== 'string' || typeof quantity !== 'number') {
      throw new Error('EDIT_CART_ITEM.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = EditCartItem;
