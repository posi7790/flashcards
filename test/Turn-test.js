const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function () {

  it('should be a function', function () {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of the class Turn', function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  })

  it('should take in a guess and a specific card', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.guess).to.equal('array');
    expect(turn.card).to.equal(card);
  });

  it('should return the guess', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.returnGuess()).to.equal('array');
  });

  it('should return the card', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate if the guess is right', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn1 = new Turn('array', card);
    expect(turn1.evaluateGuess()).to.equal(false);

    const turn2 = new Turn('object', card);
    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should give feedback if the guess is right or wrong', function () {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn1 = new Turn('array', card);
    expect(turn1.giveFeedback()).to.equal('incorrect!');

    const turn2 = new Turn('object', card);
    expect(turn2.giveFeedback()).to.equal('correct!');
  });
});