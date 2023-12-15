class AddWishlist {
  constructor(payload) {
    this._verifyPayload(payload);

    const { user_id, item } = payload;

    this.user_id = user_id;
    this.item = item;
  }

  _verifyPayload({ user_id, item }) {
    if (!user_id || !item) {
      throw new Error('ADD_ITEM_TO_WISHLIST.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof user_id !== 'string' || typeof item !== 'string') {
      throw new Error('ADD_ITEM_TO_WISHLIST.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddWishlist;
