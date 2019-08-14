const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

var card1, card2, card3, round;

beforeEach(() => {
  card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  const deck = new Deck([card1, card2, card3]);

  round = new Round(deck);
})

afterEach(() => {
  round.turn = 0;
})

describe('Round', () => {

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('each round should have a deck', () => {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should return the current card', () => {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should update turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses', () => {
    expect(round.turns).to.equal(0);
    expect(round.takeTurn('capybara')).to.equal('incorrect!');
    expect(round.takeTurn('gallbladder')).to.equal('correct!');
    expect(round.turns).to.equal(2);
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should calculate and return the percentage of correct guesses', () => {
    round.takeTurn('capybara')
    round.takeTurn('gallbladder')

    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should end the game with a message showing percent of questions answered correctly', () => {
    round.takeTurn('capybara')
    round.takeTurn('gallbladder')

    expect(round.endRound()).to.equal('\n ** Round over! ** You answered 50% of the questions correctly!')
  });
});