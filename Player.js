class Player {
  static get VERSION() {
    return '0.41';
  }

  static betRequest(gameState, bet) {
    console.log(gameState);
    let attribute = gameState.currentBuyIn;
    console.log("current_buy_in:" + attribute);

    bet(0);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
