const MarketplaceItemRepository = require('../../Domains/marketplaceItems/MarketplaceItemRepository');

class MarketplaceItemRepositoryPostgres extends MarketplaceItemRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addMarketplaceItem(marketplaceItem) {
    const { name, price, discount, rating, desc, watering, scale, height } = marketplaceItem;
    const id = `marketplace-${this._idGenerator()}`;

    const query = {
      text: 'INSERT INTO marketplace_items VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id, name, cover, price, discount, rating, sold, marketplace_items.desc, watering, scale, height',
      values: [id, name, null, price, discount, rating, 0, desc, watering, scale, height],
    };

    const result = await this._pool.query(query);

    return result.rows[0];
  }

  async getAllMarketplaceItems() {
    const query = {
      text: 'SELECT * FROM marketplace_items',
    };

    const result = await this._pool.query(query);

    return result.rows;
  }

  async getMarketplaceItemById(id) {
    const query = {
      text: 'SELECT * FROM marketplace_items WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);

    return result.rows[0];
  }
}

module.exports = MarketplaceItemRepositoryPostgres;
