const GetOxygenLeaderboardUseCase = require('../../../../Applications/use_case/GetOxygenLeaderboardUseCase');
const GetUserRankUseCase = require('../../../../Applications/use_case/GetUserRankUseCase');

class OxygenHandler {
  constructor(container) {
    this._container = container;

    this.getOxygenLeaderboardHandler = this.getOxygenLeaderboardHandler.bind(this);
  }

  async getOxygenLeaderboardHandler(request, h) {
    const getOxygenLeaderboardUseCase = this._container.getInstance(GetOxygenLeaderboardUseCase.name);
    const getUserRankUseCase = this._container.getInstance(GetUserRankUseCase.name);

    const { id: userId } = request.auth.credentials;

    const oxygen = await getOxygenLeaderboardUseCase.execute();
    const userOxygen = await getUserRankUseCase.execute({ userId });

    const response = h.response({
      status: 'success',
      data: {
        oxygen,
        userOxygen,
      },
    });
    response.code(200);
    return response;
  }
}

module.exports = OxygenHandler;
