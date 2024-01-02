class AddedMarketplaceItem {
  constructor(payload) {
    payload.cover = payload.cover || null;

    this._verifyPayload(payload);

    const { id, name, price, discount, rating, desc, watering, scale, height, type, cover } = payload;

    this.id = id;
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.rating = rating;
    this.desc = desc;
    this.watering = watering;
    this.scale = scale;
    this.height = height;
    this.type = type;
    this.cover = cover;
  }

  _verifyPayload({ id, name, price, discount, rating, desc, watering, scale, height, type, cover }) {
    if (!id || !name || !price || discount === undefined || !rating || !desc || !watering || !scale || !height || !type) {
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
      typeof type !== 'string' ||
      (typeof cover !== 'string' && cover !== null)
    ) {
      throw new Error('ADDED_MARKETPLACE_ITEM.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (discount < 0 || discount > 100) {
      throw new Error('ADDED_MARKETPLACE_ITEM.DISCOUNT_NOT_MEET_SPECIFICATION');
    }

    if (rating < 0 || rating > 5) {
      throw new Error('ADDED_MARKETPLACE_ITEM.RATING_NOT_MEET_SPECIFICATION');
    }

    // type must be 'benih', 'hias', 'buah', or 'alat'
    if (type !== 'benih' && type !== 'hias' && type !== 'buah' && type !== 'alat') {
      throw new Error('ADDED_MARKETPLACE_ITEM.TYPE_NOT_MEET_SPECIFICATION');
    }
  }
}

module.exports = AddedMarketplaceItem;
