class Player {
  static get VERSION() {
    return '0.2';
  }

  static betRequest(gameState, bet) {
    console.log(gameState);
    let cards = gameState.getAttribute("hole_cards") ;
    let attribute = gameState.currentBuyIn.value;
    console.log("current_buy_in:" + attribute);
    console.log("cards:" +cards);

    bet(0);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
