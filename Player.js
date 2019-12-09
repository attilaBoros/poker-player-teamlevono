class Player {
  static get VERSION() {
    return '0.41';
  }

  static betRequest(gameState, bet) {
    bet(0);

    console.log(gameState);
    let attribute = gameState.currentBuyIn;
    console.log("current_buy_in:" + attribute);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
