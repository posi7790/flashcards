const chai = require('chai');
const expect = chai.expect;

const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

let round, game;

beforeEach(() => {
  const cards = prototypeQuestions.map(cardData => {
    const card = new Card(cardData.id, cardData.question, cardData.answers, cardData.correctAnswer);
    return card;
  });

  const deck = new Deck(cards);

  round = new Round(deck);

  game = new Game();
})

describe('Game', () => {

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of current round', () => {
    game.start();
    expect(game.currentRound).to.deep.equal(round);
  });
});