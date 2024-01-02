const Image = require('../../images/entities/Image');

class AddPayment {
  constructor(payload) {
    this._verifyPayload(payload);

    const { name, fee, logo, user_id } = payload;

    this.name = name;
    this.fee = fee;
    this.logo = new Image(logo);
    this.user_id = user_id;
  }

  _verifyPayload({ name, fee, logo, user_id }) {
    if (!name || !fee || !logo || !user_id) {
      throw new Error('ADD_PAYMENT.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof name !== 'string' || typeof fee !== 'number' || typeof logo !== 'string' || typeof user_id !== 'string') {
      throw new Error('ADD_PAYMENT.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddPayment;
