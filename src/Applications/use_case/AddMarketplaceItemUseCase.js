const AddMarketplaceItem = require('../../Domains/marketplaceItems/entities/AddMarketplaceItem');
const AddedMarketplaceItem = require('../../Domains/marketplaceItems/entities/AddedMarketplaceItem');

class AddMarketplaceItemUseCase {
  constructor({ roleRepository, marketplaceItemRepository, imageRepository }) {
    this._roleRepository = roleRepository;
    this._marketplaceItemRepository = marketplaceItemRepository;
    this._imageRepository = imageRepository;
  }

  async execute(item) {
    const addMarketplaceItem = new AddMarketplaceItem(item);

    // check role
    await this._roleRepository.checkIfUserIsAdmin(addMarketplaceItem.user_id);

    let imageUrl;

    if (addMarketplaceItem.cover) {
      const { imageUrl: url, name } = await this._imageRepository.uploadImage(addMarketplaceItem.cover, 'marketplace-item');
      addMarketplaceItem.cover = name;
      imageUrl = url;
    }

    const marketplaceItem = await this._marketplaceItemRepository.addMarketplaceItem(addMarketplaceItem);

    if (addMarketplaceItem.cover) {
      marketplaceItem.cover = imageUrl;
    }

    return new AddedMarketplaceItem(marketplaceItem);
  }
}

module.exports = AddMarketplaceItemUseCase;
