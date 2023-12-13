class GetMarketplaceItemById {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, user_id } = payload;

    this.id = id;
    this.user_id = user_id;
  }

  _verifyPayload({ id, user_id }) {
    if (!id || !user_id) {
      throw new Error('GET_MARKETPLACE_ITEM_BY_ID.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof id !== 'string' || typeof user_id !== 'string') {
      throw new Error('GET_MARKETPLACE_ITEM_BY_ID.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = GetMarketplaceItemById;
