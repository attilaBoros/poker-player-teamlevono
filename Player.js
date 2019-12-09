class Player {
  static get VERSION() {
    return '0.9';
  }

  static betRequest(gameState, bet) {
    console.log(gameState);

    let attribute = gameState.current_buy_in;
    let minimumRaise = gameState.minimum_raise;
    console.log("current_buy_in:" + attribute);

    const currentBuyIn = parseInt(attribute);
    console.log("hole_cards: " + gameState.hole_cards);
    const minimumR = parseInt(minimumRaise);

    bet(currentBuyIn + minimumR);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
