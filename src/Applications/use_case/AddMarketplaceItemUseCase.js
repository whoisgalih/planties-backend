const AddMarketplaceItem = require('../../Domains/marketplaceItems/entities/AddMarketplaceItem');

class AddMarketplaceItemUseCase {
  constructor({ roleRepository, marketplaceItemRepository }) {
    this._roleRepository = roleRepository;
    this._marketplaceItemRepository = marketplaceItemRepository;
  }

  async execute(item) {
    const addMarketplaceItem = new AddMarketplaceItem(item);

    // check role
    await this._roleRepository.checkIfUserIsAdmin(addMarketplaceItem.user_id);

    const marketplaceItem = await this._marketplaceItemRepository.addMarketplaceItem(addMarketplaceItem);

    return marketplaceItem;
  }
}

module.exports = AddMarketplaceItemUseCase;
