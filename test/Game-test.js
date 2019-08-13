const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

let game;

beforeEach(() => {
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
    expect(game.round).to.deep.equal(round)
  });
});