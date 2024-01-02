class GetMarketplaceItemsUseCase {
  constructor({ roleRepository, marketplaceItemRepository }) {
    this._roleRepository = roleRepository;
    this._marketplaceItemRepository = marketplaceItemRepository;
  }

  async execute(payload) {
    const { type, name, minprice, maxprice, sortby, sort, limit } = payload;

    const marketplaceItems = await this._marketplaceItemRepository.getAllMarketplaceItems({ type, name, minprice, maxprice, sortby, sort, limit });
    marketplaceItems.forEach((item) => {
      if (item.cover) {
        item.cover = `${process.env.AWS_S3_PHOTO_BASE_URL}${item.cover}`;
      }
    });

    return marketplaceItems;
  }
}

module.exports = GetMarketplaceItemsUseCase;
