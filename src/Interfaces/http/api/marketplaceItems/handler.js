const AddMarketplaceItemUseCase = require('../../../../Applications/use_case/AddMarketplaceItemUseCase');
const GetAllMarketplaceItemsUseCase = require('../../../../Applications/use_case/GetAllMarketplaceItemsUseCase');
const GetMarketplaceItemByIdUseCase = require('../../../../Applications/use_case/GetMarketplaceItemByIdUseCase');

class MarketplaceItemHandler {
  constructor(container) {
    this._container = container;

    this.postMarketplaceItemHandler = this.postMarketplaceItemHandler.bind(this);
    this.getMarketplaceItemsHandler = this.getMarketplaceItemsHandler.bind(this);
    this.getMarketplaceItemByIdHandler = this.getMarketplaceItemByIdHandler.bind(this);
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

  async getMarketplaceItemsHandler(request, h) {
    const getAllMarketplaceItemsUseCase = this._container.getInstance(GetAllMarketplaceItemsUseCase.name);

    const { id: user_id } = request.auth.credentials;

    const marketplaceItems = await getAllMarketplaceItemsUseCase.execute(user_id);

    return {
      status: 'success',
      data: {
        marketplace_items: marketplaceItems,
      },
    };
  }

  async getMarketplaceItemByIdHandler(request, h) {
    const getMarketplaceItemByIdUseCase = this._container.getInstance(GetMarketplaceItemByIdUseCase.name);

    const { id } = request.params;

    const marketplaceItem = await getMarketplaceItemByIdUseCase.execute({ id });

    return {
      status: 'success',
      data: {
        marketplace_item: marketplaceItem,
      },
    };
  }
}

module.exports = MarketplaceItemHandler;
