const GetOxygenLeaderboardUseCase = require('../../../../Applications/use_case/GetOxygenLeaderboardUseCase');

class OxygenHandler {
  constructor(container) {
    this._container = container;

    this.getOxygenLeaderboardHandler = this.getOxygenLeaderboardHandler.bind(this);
  }

  async getOxygenLeaderboardHandler(request, h) {
    const getOxygenLeaderboardUseCase = this._container.getInstance(GetOxygenLeaderboardUseCase.name);

    const oxygen = await getOxygenLeaderboardUseCase.execute();

    const response = h.response({
      status: 'success',
      data: {
        oxygen,
      },
    });
    response.code(200);
    return response;
  }
}

module.exports = OxygenHandler;
