import Player from "../playerFactory";

describe('Create player', () => {
  let player;

  beforeEach(() => {
    player = new Player();
  })

  test('return true if player won', () => {
    player.succesfullHits += 17;

    expect(player.hasWon()).toBe(true);
  })

  test('return a random number less or equal 9 ', () => {
    expect(player.random()).toBeLessThanOrEqual(9);
  })

})