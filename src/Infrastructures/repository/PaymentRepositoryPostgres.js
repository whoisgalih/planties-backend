const PaymentRepository = require('../../Domains/payments/PaymentRepository');
const NotFoundError = require('../../Commons/exceptions/NotFoundError');

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

  async getPayments() {
    const query = {
      text: 'SELECT id, name, logo FROM payments',
    };

    const result = await this._pool.query(query);
    return result.rows;
  }

  async getPaymentById(paymentId) {
    const query = {
      text: 'SELECT id, name, logo FROM payments WHERE id = $1',
      values: [paymentId],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new NotFoundError('payment tidak ditemukan');
    }

    return result.rows[0];
  }

  async deletePaymentById(paymentId) {
    const query = {
      text: 'DELETE FROM payments WHERE id = $1 RETURNING id',
      values: [paymentId],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new NotFoundError('payment tidak ditemukan');
    }

    return result.rows[0];
  }
}

module.exports = PaymentRepositoryPostgres;
