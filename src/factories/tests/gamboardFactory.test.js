import Gameboard from "../gameboardFactory";
import Ship from "../shipFactory";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { window } = (new JSDOM('<!DOCTYPE html><div class="container"></div>')).window;
global.document = window.document;
global.window = window;

describe('create board', () => {
  let gameboard;
  let ship;
  let ship2;
  let ships = [];


  beforeEach(() => {
    gameboard = new Gameboard;
    ship = new Ship(5);
    ships.push(ship);


    const field = document.createElement("div");
    for (let i = 0; i < gameboard.board.length; i++) {
      const column = document.createElement("div");
      column.classList.add("column");
      for (let j = 0; j < gameboard.board.length; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        //set data for each square
        square.setAttribute("data-row", j);
        square.setAttribute("data-column", i);
        column.appendChild(square);
      }
      field.appendChild(column);
    }
    const container = document.querySelector('.container')
    container.appendChild(field);
 
   })

  test('creates bidimensional board 10x10 with object', () => {

    expect(gameboard.board[9][9]).toStrictEqual({ship:false, hit:false});
  })

  test('place ship on board vertically', () => {

    gameboard.placeShipVertically(ships, 1, 2)
    expect(gameboard.board[0][2].ship).toBe(false);
    expect(gameboard.board[1][2].ship).toBe(true);
    expect(gameboard.board[2][2].ship).toBe(true);
    expect(gameboard.board[3][2].ship).toBe(true);
    expect(gameboard.board[4][2].ship).toBe(true);
    expect(gameboard.board[5][2].ship).toBe(true);
    expect(gameboard.board[6][2].ship).toBe(false);
  })

  test('place ship on board horizontally', () => {

    gameboard.placeShipHorizontally(ships, 1, 2)
 
    expect(gameboard.board[1][1].ship).toBe(false);
    expect(gameboard.board[1][2].ship).toBe(true);
    expect(gameboard.board[1][3].ship).toBe(true);
    expect(gameboard.board[1][4].ship).toBe(true);
    expect(gameboard.board[1][5].ship).toBe(true);
    expect(gameboard.board[1][6].ship).toBe(true);
    expect(gameboard.board[1][7].ship).toBe(false);
  })

})