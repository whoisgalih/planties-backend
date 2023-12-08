const AddMarketplaceItemUseCase = require('../../../../Applications/use_case/AddMarketplaceItemUseCase');

class MarketplaceItemHandler {
  constructor(container) {
    this._container = container;

    this.postMarketplaceItemHandler = this.postMarketplaceItemHandler.bind(this);
  }

  async postMarketplaceItemHandler(request, h) {
    const addMarketplaceItemUseCase = this._container.getInstance(AddMarketplaceItemUseCase.name);

    const { name, price, discount, rating, desc, watering, scale, height } = request.payload;
    const { id: user_id } = request.auth.credentials;

    const addedMarketplaceItem = await addMarketplaceItemUseCase.execute({ name, price, discount, rating, desc, watering, scale, height, user_id });

    const response = h.response({
      status: 'success',
      data: {
        marketplace_item: addedMarketplaceItem,
      },
    });
    response.code(201);
    return response;
  }
}

module.exports = MarketplaceItemHandler;
