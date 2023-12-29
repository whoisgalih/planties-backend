class AddMarketplaceItem {
  constructor(payload) {
    this._verifyPayload(payload);

    const { user_id, name, price, discount, rating, desc, watering, scale, height } = payload;

    this.user_id = user_id;
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.rating = rating;
    this.desc = desc;
    this.watering = watering;
    this.scale = scale;
    this.height = height;
  }

  _verifyPayload({ name, price, discount, rating, desc, watering, scale, height }) {
    if (!name || !price || discount === undefined || !rating || !desc || !watering || !scale || !height) {
      throw new Error('ADD_MARKETPLACE_ITEM.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (
      typeof name !== 'string' ||
      typeof price !== 'number' ||
      typeof discount !== 'number' ||
      typeof rating !== 'number' ||
      typeof desc !== 'string' ||
      typeof watering !== 'string' ||
      typeof scale !== 'string' ||
      typeof height !== 'string'
    ) {
      throw new Error('ADD_MARKETPLACE_ITEM.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (discount < 0 || discount > 100) {
      throw new Error('ADD_MARKETPLACE_ITEM.DISCOUNT_NOT_MEET_SPECIFICATION');
    }
  }
}

module.exports = AddMarketplaceItem;
