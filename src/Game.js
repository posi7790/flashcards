const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/round');

class Game {
  constructor() {}

  start() {
    const cards = prototypeQuestions.map(cardData => {
      const card = new Card(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer);
      return card;
    });
    const deck = new Deck(cards);
    const round = new Round(deck);


    this.currentRound = round;

    this.printMessage(deck, round);
    this.printQuestion(this.currentRound)
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;