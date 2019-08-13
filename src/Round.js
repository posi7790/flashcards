const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards || [];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns]
  }

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);
    this.turns++;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.unshift(currentCard.id);
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.round(this.incorrectGuesses.length / this.turns * 100);
  }

  endRound() {
    return `\n ** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;