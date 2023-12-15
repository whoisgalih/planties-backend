class DeleteWishlistItem {
  constructor(payload) {
    this._verifyPayload(payload);

    const { user_id, id } = payload;

    this.user_id = user_id;
    this.id = id;
  }

  _verifyPayload({ user_id, id }) {
    if (!user_id || !id) {
      throw new Error('DELETE_WISHLIST_ITEM.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof user_id !== 'string' || typeof id !== 'string') {
      throw new Error('DELETE_WISHLIST_ITEM.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = DeleteWishlistItem;
