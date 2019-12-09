class Player {
  static get VERSION() {
    return '0.2';
  }

  static betRequest(gameState, bet) {
    console.log(gameState);
    bet(0);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
