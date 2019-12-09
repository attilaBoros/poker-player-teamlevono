class Player {
  static get VERSION() {
    return '1.4';
  }

  static betRequest(gameState, bet) {
    console.log(gameState);

    let attribute = gameState.current_buy_in;
    let minimumRaise = gameState.minimum_raise;
    console.log("current_buy_in:" + attribute);

    const currentBuyIn = parseInt(attribute);
    const minimumR = parseInt(minimumRaise);
    let ourStack = 0;
    for (const player of gameState.players) {
      if (player["name"] === "TeamLevono") {
        ourStack = player["stack"];
        console.log(ourStack);
      }
    }
    bet(ourStack);

    const holeCardsObject = gameState.hole_cards;
    const holeCards = Object.values(holeCardsObject);
    console.log(holeCards);

  }

  static showdown(gameState) {
  }
}

module.exports = Player;
