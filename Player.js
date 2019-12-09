class Player {
  static get VERSION() {
    return '0.8';
  }

  static betRequest(gameState, bet) {
    console.log(gameState);

    let attribute = gameState.current_buy_in;
    console.log("current_buy_in:" + attribute);
    const currentBuyIn = parseInt(attribute);
    console.log("hole_cards: " + gameState.hole_cards)

    bet(currentBuyIn + 5);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
