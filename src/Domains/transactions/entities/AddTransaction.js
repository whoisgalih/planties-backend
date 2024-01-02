class AddTransaction {
  constructor(payload) {
    this._verifyPayload(payload);

    const { address_id, payment_id, shipment_id, user_id } = payload;

    this.address_id = address_id;
    this.payment_id = payment_id;
    this.shipment_id = shipment_id;
    this.user_id = user_id;
  }

  _verifyPayload({ address_id, payment_id, shipment_id, user_id }) {
    if (!address_id || !payment_id || !shipment_id || !user_id) {
      throw new Error('ADD_TRANSACTION.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof address_id !== 'string' || typeof payment_id !== 'string' || typeof shipment_id !== 'string' || typeof user_id !== 'string') {
      throw new Error('ADD_TRANSACTION.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddTransaction;
