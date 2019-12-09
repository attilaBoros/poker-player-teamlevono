class Player {
  static get VERSION() {
    return '0.6';
  }

  static betRequest(gameState, bet) {
    console.log(gameState);

    let attribute = gameState.current_buy_in;
    console.log("current_buy_in:" + attribute);
    const currentBuyIn = parseInt(attribute);

    bet(currentBuyIn + 5);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
