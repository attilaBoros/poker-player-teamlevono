class Player {
  static get VERSION() {
    return '2.1';
  }

  static betRequest(gameState, bet) {
    console.log(gameState);

    let attribute = gameState.current_buy_in;
    let minimumRaise = gameState.minimum_raise;
    console.log("current_buy_in:" + attribute);

    const currentBuyIn = parseInt(attribute);
    const minimumR = parseInt(minimumRaise);
    const ourStack = this.getOurStack(gameState);

    let holeCards = this.getHoleCards(gameState);

    let cards = [];
    for (const holeCard of holeCards) {
      cards.push(holeCard["rank"]);
    }

    if (gameState.community_cards != null) {
      console.log(gameState.community_cards);
    }

    const enemyTeam = this.getEnemyTeam(gameState);
    if (enemyTeam["bet"] > 0) {
      bet(parseInt(enemyTeam["bet"]) + 5)
    }
    else {
      bet(0);
    }

  }

  static getHoleCards(gameState) {
    let holeCardsObject;
    for (const player of gameState.players) {
      if (player["name"] === "TeamLevono") {
        holeCardsObject = player["hole_cards"];
        break;
      }
    }
    let holeCards = [];
    for (const holeCard of holeCardsObject) {
      console.log(holeCard);
      holeCards.push(holeCard);
    }
    return holeCards;
  }

  static getOurStack(gameState) {
    let ourStack = 0;
    for (const player of gameState.players) {
      if (player["name"] === "TeamLevono") {
        ourStack = player["stack"];
        console.log("our_stack: " + ourStack);
        return ourStack;
      }
    }
  }

  static getEnemyTeam(gameState) {
    for (const player of gameState.players) {
      if (player["name"] === "Monumentalis Nyerogep") {
        return player;
      }
    }
  }

  static showdown(gameState) {
    console.log("showdown: ");
    this.comcards(gameState);



  }



  static comcards(gameState) {
    const comCards = gameState.community_cards;
    for (const card of comCards) {
      console.log(card["rank"] + "--" + card["suit"])
    }
  }
}

module.exports = Player;
