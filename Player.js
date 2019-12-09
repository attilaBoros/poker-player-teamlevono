class Player {
  static get VERSION() {
    return '2.7';
  }

  static betRequest(gameState, bet) {
    console.log(gameState);

    let attribute = gameState.current_buy_in;
    let minimumRaise = gameState.minimum_raise;
    console.log("current_buy_in:" + attribute);

    const currentBuyIn = parseInt(attribute);
    const minimumR = parseInt(minimumRaise);
    const ourStack = parseInt(this.getOurStack(gameState));

    let holeCards = this.getHoleCards(gameState);

    let cards = [];
    for (const holeCard of holeCards) {
      cards.push(holeCard["rank"]);
    }

    const enemyTeam = this.getEnemyTeam(gameState);

    const allCards = this.getAllCards(gameState, cards);


    if (this.isDrill(allCards)) {
      console.log("drill is true: " + allCards);
      bet(ourStack);
    }
    else if (cards[0] === cards[1]) {
      bet(currentBuyIn + minimumR + 5);
    }
    else if(cards[0] === "J" || cards[0] === "Q" || cards[0] === "K" || cards[0] === "A"){
      bet(currentBuyIn + minimumR)
    }
    else if(cards[1] === "J" || cards[1] === "Q" || cards[1] === "K" || cards[1] === "A") {
      bet(currentBuyIn + minimumR)
    }
    else {
      bet(0);
    }

  }

  static isDrill(allCards) {
    let counter = 0;
    for (let i = 0; i < allCards.length; i++) {
      for (let j = 0; j < allCards.length; j++) {
        if (i === j) {
          continue;
        }
        if (allCards[i] === allCards[j]) {
          counter++;
        }
      }
    }
    return counter >= 3;

  }

  static getAllCards(gameState, cards) {
    const allCards = [];

    for (const card of this.comcards(gameState)) {
      allCards.push(card["rank"]);
    }
    for (const card of cards) {
      allCards.push(card["rank"]);
    }
    return allCards;
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
        console.log("our_stack: " + ourStack + " type: " + typeof(ourStack));
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
    let cards = [];
    for (const card of comCards) {
      console.log(card["rank"] + "--" + card["suit"])
      cards.push(card["rank"]);
    }
    return cards;
  }
}

module.exports = Player;
