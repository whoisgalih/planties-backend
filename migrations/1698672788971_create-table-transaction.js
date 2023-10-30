/* eslint-disable camelcase */

exports.up = (pgm) => {
    pgm.createTable('transaction', {
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
    pgm.addConstraint('transaction', 'fk_transaction.user_id_user.id', 'FOREIGN KEY(user_id) REFERENCES "user"(id) ON DELETE CASCADE');
    pgm.addConstraint('transaction', 'fk_transaction.address_id_address.id', 'FOREIGN KEY(address_id) REFERENCES address(id) ON DELETE CASCADE');
    pgm.addConstraint('transaction', 'fk_transaction.cart_id_cart.id', 'FOREIGN KEY(cart_id) REFERENCES cart(id) ON DELETE CASCADE');
    pgm.addConstraint('transaction', 'fk_transaction.shipment_id_shipment.id', 'FOREIGN KEY(shipment_id) REFERENCES shipment(id) ON DELETE CASCADE');
    pgm.addConstraint('transaction', 'fk_transaction.payment_id_payment.id', 'FOREIGN KEY(payment_id) REFERENCES payment(id) ON DELETE CASCADE');
};
  
exports.down = (pgm) => {
    pgm.dropTable('transaction');
};
