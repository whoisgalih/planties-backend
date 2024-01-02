const PaymentRepository = require('../../Domains/payments/PaymentRepository');

class PaymentRepositoryPostgres extends PaymentRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addPayment(payment) {
    const { name, logo, fee } = payment;
    const id = `payment-${this._idGenerator()}`;
    const query = {
      text: 'INSERT INTO payments VALUES($1, $2, $3, $4) RETURNING id, name, logo',
      values: [id, name, logo, fee],
    };
    const result = await this._pool.query(query);
    return result.rows[0];
  }
}

module.exports = PaymentRepositoryPostgres;
