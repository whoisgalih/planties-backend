const MarketplaceItemRepository = require('../../Domains/marketplaceItems/MarketplaceItemRepository');
const InvariantError = require('../../Commons/exceptions/InvariantError');

class MarketplaceItemRepositoryPostgres extends MarketplaceItemRepository {
  constructor(pool, idGenerator) {
    super();
    this._pool = pool;
    this._idGenerator = idGenerator;
  }

  async addMarketplaceItem(marketplaceItem) {
    const { name, price, discount, rating, desc, watering, scale, height, type } = marketplaceItem;
    const id = `marketplace-${this._idGenerator()}`;

    const query = {
      text: 'INSERT INTO marketplace_items VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id, name, cover, price, discount, rating, sold, marketplace_items.desc, watering, scale, height, type',
      values: [id, name, null, price, discount, rating, 0, desc, watering, scale, height, type],
    };

    const result = await this._pool.query(query);

    return result.rows[0];
  }

  async getAllMarketplaceItems({ type }) {
    const query = {
      text: 'SELECT * FROM marketplace_items WHERE (type = $1 OR $1 IS NULL)',
      values: [type],
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

    if (!result.rowCount) {
      throw new InvariantError('Marketplace item tidak ditemukan');
    }

    return result.rows[0];
  }

  async deleteMarketplaceItemById(id) {
    const query = {
      text: 'DELETE FROM marketplace_items WHERE id = $1 RETURNING id, name, cover, price, discount, rating, sold, marketplace_items.desc, watering, scale, height',
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new InvariantError('Gagal menghapus marketplace item. Id tidak ditemukan');
    }

    return result.rows[0];
  }
}

module.exports = MarketplaceItemRepositoryPostgres;
