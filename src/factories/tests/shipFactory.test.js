import Ship from '../shipFactory';

describe('create ship', () => {
  let ship;
  beforeEach(() => {
     ship = new Ship(5);
  })

  test('correct length', () => {
    expect(ship.length).toBe(5);

  })
})