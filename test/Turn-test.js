const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

var card, turn1, turn2;

beforeEach(() => {
  card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  turn1 = new Turn('array', card);
  turn2 = new Turn('object', card);
})

describe('Turn', () => {

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of the class Turn', () => {
    expect(turn1).to.be.an.instanceof(Turn);
  })

  it('should take in a guess and a specific card', () => {
    expect(turn1.guess).to.equal('array');
    expect(turn1.card).to.equal(card);
  });

  it('should return the guess', () => {
    expect(turn1.returnGuess()).to.equal('array');
  });

  it('should return the card', () => {
    expect(turn1.returnCard()).to.equal(card);
  });

  it('should evaluate if the guess is right', () => {
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should give feedback if the guess is right or wrong', () => {
    expect(turn1.giveFeedback()).to.equal('incorrect!');
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
});