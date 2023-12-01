class AddedOxygen {
  constructor(payload) {
    this._verifyPayload(payload);

    const { id, oxygen } = payload;

    this.id = id;
    this.oxygen = oxygen;
  }

  _verifyPayload({ id, oxygen }) {
    if (!id) {
      throw new Error('ADDED_OXYGEN.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof id !== 'string' || typeof oxygen !== 'number') {
      throw new Error('ADDED_OXYGEN.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}

module.exports = AddedOxygen;
