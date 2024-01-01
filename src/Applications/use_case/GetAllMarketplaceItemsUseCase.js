class GetMarketplaceItemsUseCase {
  constructor({ roleRepository, marketplaceItemRepository }) {
    this._roleRepository = roleRepository;
    this._marketplaceItemRepository = marketplaceItemRepository;
  }

  async execute(payload) {
    const { type } = payload;

    return await this._marketplaceItemRepository.getAllMarketplaceItems({ type });
  }
}

module.exports = GetMarketplaceItemsUseCase;
