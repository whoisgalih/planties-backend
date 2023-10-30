/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable('order_status', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
        },
        transaction_id:{
            type: 'VARCHAR(50)',
            notNull: true,
        },
        status:{
            type: 'VARCHAR(25)',
            notNull: true,
        },
    });
    pgm.addConstraint('order_status', 'fk_order_status.transaction_id_transaction.id', 'FOREIGN KEY(transaction_id) REFERENCES "transaction"(id) ON DELETE CASCADE');
};
  
exports.down = (pgm) => {
    pgm.dropTable('order_status');
};
