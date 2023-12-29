class AddShipment {
  constructor(payload) {
    this._verifyPayload(payload);

    const { name, type, logo, price, eta, user_id } = payload;

    this.name = name;
    this.type = type;
    this.logo = logo;
    this.price = price;
    this.eta = eta;
    this.user_id = user_id;
  }

  _verifyPayload({ name, type, logo, price, eta, user_id }) {
    if (!name || !type || !logo || price === undefined || eta === undefined || !user_id) {
      throw new Error('ADD_SHIPMENT.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof name !== 'string' || typeof type !== 'string' || typeof logo !== 'string' || typeof price !== 'number' || typeof eta !== 'number' || typeof user_id !== 'string') {
      throw new Error('ADD_SHIPMENT.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddShipment;
