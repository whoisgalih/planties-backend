class EditAddress {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, user_id, title, recipient, address, city, province, phone, latitude, longitude, postalcode } = payload;

    this.id = id;
    this.user_id = user_id;
    this.title = title;
    this.recipient = recipient;
    this.address = address;
    this.city = city;
    this.province = province;
    this.phone = phone;
    this.latitude = latitude;
    this.longitude = longitude;
    this.postalcode = postalcode;
  }

  _verifyPayload({ id, user_id, title, recipient, address, city, province, phone, latitude, longitude, postalcode }) {
    if (!id || !user_id || !title || !recipient || !address || !city || !province || !phone || !latitude || !longitude || !postalcode) {
      throw new Error('ADD_ADDRESS.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (
      typeof id !== 'string' ||
      typeof user_id !== 'string' ||
      typeof title !== 'string' ||
      typeof recipient !== 'string' ||
      typeof address !== 'string' ||
      typeof city !== 'string' ||
      typeof province !== 'string' ||
      typeof phone !== 'string' ||
      typeof latitude !== 'number' ||
      typeof longitude !== 'number' ||
      typeof postalcode !== 'number'
    ) {
      throw new Error('ADD_ADDRESS.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    if (!phone.startsWith('+62')) {
      throw new Error('ADD_ADDRESS.PHONE_NUMBER_SHOULD_START_WITH_PLUS_62');
    }
  }
}

module.exports = EditAddress;
