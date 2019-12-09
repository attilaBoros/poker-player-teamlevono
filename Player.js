class Player {
  static get VERSION() {
    return '0.6';
  }

  static betRequest(gameState, bet) {
    bet(0);

    console.log(gameState);
    let attribute = gameState.current_buy_in;
    console.log("current_buy_in:" + attribute);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
