class Player {
  static get VERSION() {
    return '1.0';
  }

  static betRequest(gameState, bet) {
    console.log(gameState);

    let attribute = gameState.current_buy_in;
    let minimumRaise = gameState.minimum_raise;
    console.log("current_buy_in:" + attribute);

    const currentBuyIn = parseInt(attribute);
    const holeCards = JSON.parse(gameState.hole_cards);
    console.log("hole_cards: " + holeCards);
    const minimumR = parseInt(minimumRaise);

    bet(currentBuyIn + minimumR);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
