const GetMarketplaceItemById = require('../../Domains/marketplaceItems/entities/GetMarketplaceItemById');
const AddedMarketplaceItem = require('../../Domains/marketplaceItems/entities/AddedMarketplaceItem');

class GetMarketplaceItemByIdUseCase {
  constructor({ marketplaceItemRepository }) {
    this._marketplaceItemRepository = marketplaceItemRepository;
  }

  async execute(payload) {
    const getMarketplaceItemById = new GetMarketplaceItemById(payload);
    const marketplaceItem = await this._marketplaceItemRepository.getMarketplaceItemById(getMarketplaceItemById.id);
    if (marketplaceItem.cover) {
      marketplaceItem.cover = `${process.env.AWS_S3_PHOTO_BASE_URL}${marketplaceItem.cover}`;
    }
    return new AddedMarketplaceItem(marketplaceItem);
  }
}

module.exports = GetMarketplaceItemByIdUseCase;
