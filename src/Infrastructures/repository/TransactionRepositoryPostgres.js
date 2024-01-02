const TransactionRepository = require('../../Domains/transactions/TransactionRepository');

class TransactionRepositoryPostgres extends TransactionRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addTransaction({ user_id, address_id, cart_id, shipment_id, payment_id, price, discount }) {
    const id = `transaction-${this._idGenerator()}`;

    const query = {
      text: 'INSERT INTO transactions (id, user_id, address_id, cart_id, shipment_id, payment_id, price, discount) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id, user_id, address_id, cart_id, shipment_id, payment_id, price, discount, date',
      values: [id, user_id, address_id, cart_id, shipment_id, payment_id, price, discount],
    };

    const result = await this._pool.query(query);
    return result.rows[0];
  }
}

module.exports = TransactionRepositoryPostgres;
