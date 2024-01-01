class AddMarketplaceItem {
  constructor(payload) {
    this._verifyPayload(payload);

    const { user_id, name, price, discount, rating, desc, watering, scale, height, type } = payload;

    this.user_id = user_id;
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.rating = rating;
    this.desc = desc;
    this.watering = watering;
    this.scale = scale;
    this.height = height;
    this.type = type;
  }

  _verifyPayload({ name, price, discount, rating, desc, watering, scale, height, type }) {
    console.log(name, price, discount, rating, desc, watering, scale, height, type);
    if (!name || !price || discount === undefined || !rating || !desc || !watering || !scale || !height || !type) {
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
      typeof height !== 'string' ||
      typeof type !== 'string'
    ) {
      throw new Error('ADD_MARKETPLACE_ITEM.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (discount < 0 || discount > 100) {
      throw new Error('ADD_MARKETPLACE_ITEM.DISCOUNT_NOT_MEET_SPECIFICATION');
    }

    if (rating < 0 || rating > 5) {
      throw new Error('ADD_MARKETPLACE_ITEM.RATING_NOT_MEET_SPECIFICATION');
    }

    // type must be 'benih', 'hias', 'buah', or 'alat'
    if (type !== 'benih' && type !== 'hias' && type !== 'buah' && type !== 'alat') {
      throw new Error('ADD_MARKETPLACE_ITEM.TYPE_NOT_MEET_SPECIFICATION');
    }
  }
}

module.exports = AddMarketplaceItem;
