const GetMarketplaceItemById = require('../../Domains/marketplaceItems/entities/GetMarketplaceItemById');
const AddedMarketplaceItem = require('../../Domains/marketplaceItems/entities/AddedMarketplaceItem');

class GetMarketplaceItemByIdUseCase {
  constructor({ marketplaceItemRepository }) {
    this._marketplaceItemRepository = marketplaceItemRepository;
  }

  async execute(payload) {
    const getMarketplaceItemById = new GetMarketplaceItemById(payload);
    const marketplaceItem = await this._marketplaceItemRepository.getMarketplaceItemById(getMarketplaceItemById.id);
    return new AddedMarketplaceItem(marketplaceItem);
  }
}

module.exports = GetMarketplaceItemByIdUseCase;
