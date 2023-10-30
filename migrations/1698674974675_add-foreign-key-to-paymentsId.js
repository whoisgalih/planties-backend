/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.addConstraint('transactions', 'fk_transactions.payment_id_payments.id', 'FOREIGN KEY(payment_id) REFERENCES payments(id) ON DELETE CASCADE');
  };
  
  exports.down = (pgm) => {
    pgm.dropConstraint('transactions', 'fk_transactions.payment_id_payments.id');
  };
