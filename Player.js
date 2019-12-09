class Player {
  static get VERSION() {
    return '8';
  }

  static betRequest(gameState, bet) {
    bet(0);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
