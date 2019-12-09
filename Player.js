class Player {
  static get VERSION() {
    return '3.4';
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

    let ourCards = [];
    for (const holeCard of holeCards) {
      ourCards.push(holeCard["rank"]);
    }
    ourCards = this.changeCardsToNumbers(ourCards);

    const enemyTeam = this.getEnemyTeam(gameState);

    let allCards = this.getAllCards(gameState, ourCards);
    allCards = this.changeCardsToNumbers(allCards);


    if (this.isDrill(allCards)) {
      console.log("drill is true: " + allCards.toString());
      bet(ourStack);
    } else if (ourCards[0] === ourCards[1]) {
      if (ourCards[0] > 10) {
        bet(ourStack);
      }
      console.log("alacsony párunk van vazze:" + ourCards[0]);
      bet(currentBuyIn + minimumR);

    } else if (this.isRow(allCards)) {
      console.log("row is true: " + allCards.toString());
      bet(ourStack);
    }
    /*else if(ourCards[0] === "J" || ourCards[0] === "Q" || ourCards[0] === "K" || ourCards[0] === "A"){
      bet(currentBuyIn + minimumR)
    }
    else if(cards[1] === "J" || cards[1] === "Q" || cards[1] === "K" || cards[1] === "A") {
      bet(currentBuyIn + minimumR)
    }*/
    else {
      bet(0);
    }

  }

  static changeCardsToNumbers(cards) {
    for (let i = 0; i < cards.length; i++) {
      if (cards[i] === "J") cards[i] = 11;
      else if (cards[i] === "Q") cards[i] = 12;
      else if (cards[i] === "K") cards[i] = 13;
      else if (cards[i] === "A") cards[i] = 14;
      else parseInt(cards[i]);
    }
    return cards;
  }

  static isStraight(allCards) {
    allCards.sort();
    console.log(allCards);
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
        console.log("our_stack: " + ourStack + " type: " + typeof (ourStack));
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

  static isFlush(gameState) {

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


  static isRow(allCards) {
    allCards.sort();
    for (let card of allCards) {
      let counter = 0;
      for (let i = 0; i < allCards.length - 1; i++) {
        if (allCards[i] === allCards[i + 1]) {
          counter++;
        }
      }
      if (counter >= 5) {
        return true;
      }
      return false
    }

  }
}
module.exports = Player;
