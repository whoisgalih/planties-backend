class AddedMarketplaceItem {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, name, price, discount, rating, desc, watering, scale, height, user_id } = payload;

    this.id = id;
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.rating = rating;
    this.desc = desc;
    this.watering = watering;
    this.scale = scale;
    this.height = height;
    this.user_id = user_id;
  }

  _verifyPayload({ id, name, price, discount, rating, desc, watering, scale, height, user_id }) {
    if (!id || !name || !price || !discount || !rating || !desc || !watering || !scale || !height || !user_id) {
      throw new Error('ADDED_MARKETPLACE_ITEM.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (
      typeof id !== 'string' ||
      typeof name !== 'string' ||
      typeof price !== 'number' ||
      typeof discount !== 'number' ||
      typeof rating !== 'number' ||
      typeof desc !== 'string' ||
      typeof watering !== 'string' ||
      typeof scale !== 'string' ||
      typeof height !== 'string' ||
      typeof user_id !== 'string'
    ) {
      throw new Error('ADDED_MARKETPLACE_ITEM.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (discount < 0 || discount > 100) {
      throw new Error('ADDED_MARKETPLACE_ITEM.DISCOUNT_NOT_MEET_SPECIFICATION');
    }
  }
}
