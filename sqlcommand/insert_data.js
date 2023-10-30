const plantQuery = {
  text: "INSERT INTO oxygen VALUES ($1, $2) RETURNING id, oxygen",
  values: [id, oxygen],
};

const userQuery = {
  text: "INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id, oxygen_id, username, email, password, fullname, profileImage",
  values: [id, oxygen_id, username, email, password, fullname, profileImage],
};

const authQuery = {
  text: "INSERT INTO authentications VALUES ($1) RETURNING token",
  values: [token],
};

const gardenQuery = {
  text: "INSERT INTO gardens VALUES ($1, $2, $3, $4) RETURNING id, user_id, name, type",
  values: [id, user_id, name, type],
};

const reminderQuery = {
  text: "INSERT INTO reminders VALUES ($1, $2, $3, $4) RETURNING id, garden_id, name, type",
  values: [id, garden_id, name, type],
};

const addressQuery = {
  text: "INSERT INTO addresses VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id, user_id, address, city, province, phone, latitude, longitude, postalcode",
  values: [
    id,
    user_id,
    address,
    city,
    province,
    phone,
    latitude,
    longitude,
    postalcode,
  ],
};

const shipmentQuery = {
  text: "INSERT INTO shipments VALUES ($1, $2, $3, $4, $5) RETURNING id, name, type, logo, price, eta",
  values: [id, name, type, logo, price, eta],
};

const marketplaceItemQuery = {
  text: "INSERT INTO marketplace_items VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id, name, cover, price, discount, rating, sold, desc, watering, scale, height",
  values: [
    id,
    name,
    cover,
    price,
    discount,
    rating,
    sold,
    desc,
    watering,
    scale,
    height,
  ],
};

const insertCartQuery = {
  text: "INSERT INTO carts VALUES ($1, $2) RETURNING id, user_id",
  values: [id, user_id],
};

const insertCartItemQuery = {
  text: "INSERT INTO cart_items VALUES ($1, $2, $3, $4) RETURNING id, cart_id, marketplace_item_id, quantity",
  values: [id, cart_id, marketplace_item_id, quantity],
};

const insertWishlistQuery = {
  text: "INSERT INTO wishlists VALUES ($1, $2) RETURNING id, user_id",
  values: [id, user_id],
};

const insertWishlistItemQuery = {
  text: "INSERT INTO wishlist_items VALUES ($1, $2, $3) RETURNING id, wishlist_id, marketplace_item_id",
  values: [id, wishlist_id, marketplace_item_id],
};

const insertTransactionQuery = {
  text: "INSERT INTO transactions VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id, user_id, address_id, cart_id, shipment_id, payment_id, date, price, discount",
  values: [
    id,
    user_id,
    address_id,
    cart_id,
    shipment_id,
    payment_id,
    date,
    price,
    discount,
  ],
};

const insertPaymentQuery = {
  text: "INSERT INTO payments VALUES ($1, $2, $3, $4) RETURNING id, name, logo, fee",
  values: [id, name, logo, fee],
};

const insertOrderStatusQuery = {
  text: "INSERT INTO order_status VALUES ($1, $2, $3) RETURNING id, transaction_id, status",
  values: [id, transaction_id, status],
};
