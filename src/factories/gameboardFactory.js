class Gameboard {
  constructor() {
    this.board = [];
    this.createBoard();
  }

  createBoard() {
    for (let i = 0; i < 10; i++) {
      let array1 = [];
      for (let j = 0; j < 10; j++) {
        let array2 = { ship: false, hit: false };
        array1.push(array2);
      }
      this.board.push(array1);
    }
  }

  resetBoard() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.board[i][j] = { ship: false, hit: false };
        document
          .querySelector(`[data-row="${i}"][data-column="${j}"]`)
          .classList.remove("ship");
      }
    }
  }

  isHit(row, column) {
    return this.board[row][column].hit;
  }

  setComputerBoard() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        document
          .querySelector(`[data-row="${i}"][data-column="${j}"]`)
          .classList.remove("ship");
      }
    }
  }

  placeShipVertically(ships, initialRow, initialColumn) {
    let shipLength = ships[0].length;
    if (initialRow + shipLength > 9) return;
    if (this.checkPositionIsFree(shipLength, initialRow, initialColumn, true))
      return;
    for (let i = 0; i < shipLength; i++) {
      document
        .querySelector(
          `[data-row="${initialRow + i}"][data-column="${initialColumn}"]`
        )
        .classList.add("ship");
      this.board[initialRow + i][initialColumn].ship = true;
    }
    ships.shift();
  }

  placeShipHorizontally(ships, initialRow, initialColumn) {
    let shipLength = ships[0].length;
    // check if the ship doesnt go over the board
    if (initialColumn + shipLength > 9) return;
    if (this.checkPositionIsFree(shipLength, initialRow, initialColumn, false))
      return;
    for (let i = 0; i < shipLength; i++) {
      document
        .querySelector(
          `[data-row="${initialRow}"][data-column="${initialColumn + i}"]`
        )
        .classList.add("ship");
      this.board[initialRow][initialColumn + i].ship = true;
    }
    ships.shift();
  }
  // check position where to place ship is free from other ship
  checkPositionIsFree(shipLength, initialRow, initialColumn, vertical) {
    //add +1 for dont place ship in a row
    for (let j = 0; j < shipLength + 1; j++) {
      if (vertical) {
        if  (this.board[initialRow + j][initialColumn].ship === true) {
          return true;
        }
      } else {
        if (this.board[initialRow][initialColumn + j].ship === true) {
          return true;
        }
      }
    }
  }

  receiveAttack(row, column, container) {
    if (this.board[row][column].hit === false) {
      this.board[row][column].hit = true;
      if (this.board[row][column].ship === false) {
        container
          .querySelector(`[data-row="${row}"][data-column="${column}"]`)
          .classList.add("hit-water");
      } else {
        container
          .querySelector(`[data-row="${row}"][data-column="${column}"]`)
          .classList.add("hit-ship");
      }
    }
  }
}

export default Gameboard;