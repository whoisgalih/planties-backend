const GetMarketplaceItemById = require('../../Domains/marketplaceItems/entities/GetMarketplaceItemById');
const AddedMarketplaceItem = require('../../Domains/marketplaceItems/entities/AddedMarketplaceItem');

class DeleteMarketplaceItemByIdUseCase {
  constructor({ roleRepository, marketplaceItemRepository }) {
    this._roleRepository = roleRepository;
    this._marketplaceItemRepository = marketplaceItemRepository;
  }

  async execute(payload) {
    const getMarketplaceItemById = new GetMarketplaceItemById(payload);
    await this._roleRepository.checkIfUserIsAdmin(getMarketplaceItemById.user_id);
    const marketplaceItem = await this._marketplaceItemRepository.deleteMarketplaceItemById(getMarketplaceItemById.id);
    return new AddedMarketplaceItem(marketplaceItem);
  }
}

module.exports = DeleteMarketplaceItemByIdUseCase;
