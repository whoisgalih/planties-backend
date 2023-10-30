/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable('transactions', {
        id: {
            type: 'VARCHAR(50)',
            primaryKey: true,
        },
        user_id:{
            type: 'VARCHAR(50)',
            notNull: true,
        },
        address_id:{
            type: 'VARCHAR(50)',
            notNull: true,
        },
        cart_id:{
            type: 'VARCHAR(50)',
            notNull: true,
        },
        shipment_id:{
            type: 'VARCHAR(50)',
            notNull: true,
        },
        payment_id:{
            type: 'VARCHAR(50)',
            notNull: true,
        },
        date:{
            type: 'DATE',
            notNull: true,
        },
        price:{
            type: 'float',
            notNull: true,
        },
        discount:{
            type: 'float',
            notNull: true,
        },
    });
    pgm.addConstraint('transactions', 'fk_transactions.user_id_user.id', 'FOREIGN KEY(user_id) REFERENCES "users"(id) ON DELETE CASCADE');
    pgm.addConstraint('transactions', 'fk_transactions.address_id_addresses.id', 'FOREIGN KEY(address_id) REFERENCES addresses(id) ON DELETE CASCADE');
    pgm.addConstraint('transactions', 'fk_transactions.cart_id_carts.id', 'FOREIGN KEY(cart_id) REFERENCES carts(id) ON DELETE CASCADE');
    pgm.addConstraint('transactions', 'fk_transactions.shipment_id_shipments.id', 'FOREIGN KEY(shipment_id) REFERENCES shipments(id) ON DELETE CASCADE');
    pgm.addConstraint('transactions', 'fk_transactions.payment_id_payments.id', 'FOREIGN KEY(payment_id) REFERENCES payments(id) ON DELETE CASCADE');

};
  
exports.down = (pgm) => {
    pgm.dropTable('transactions');
};
