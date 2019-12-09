class Player {
  static get VERSION() {
    return '1.7';
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
    bet(0);
    let holeCardsObject;
    for (const player of gameState.players) {
      if (player["name"] === "TeamLevono") {
        holeCardsObject = player["hole_cards"];
        break;
      }
    }

    for (const holeCard of holeCardsObject) {
      console.log(holeCard);
    }

  }

  static showdown(gameState) {
  }
}

module.exports = Player;
