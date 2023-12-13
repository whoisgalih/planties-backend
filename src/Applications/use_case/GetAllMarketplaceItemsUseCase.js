class GetMarketplaceItemsUseCase {
  constructor({ roleRepository, marketplaceItemRepository }) {
    this._roleRepository = roleRepository;
    this._marketplaceItemRepository = marketplaceItemRepository;
  }

  async execute(payload) {
    await this._roleRepository.checkIfUserIsAdmin(payload);
    return await this._marketplaceItemRepository.getAllMarketplaceItems();
  }
}

module.exports = GetMarketplaceItemsUseCase;
