class Player {
  constructor(name) {
    this.name = name;
    this.succesfullHits = 0;    
  }

  playerAttackSuccessfully(row, column, gameboard) {
    if (gameboard.board[row][column].ship === true) {
      this.succesfullHits += 1;
    }
  }

  resetScore() {
    this.succesfullHits = 0;
  }

  hasWon() {
    if (this.succesfullHits === 17) {
      return true;
    }
  }

  random() {
    return Math.floor(Math.random() * 10);
  }

  randomAttack(gameboard, container) {
    let rowRandom = this.random();
    let columnRandom = this.random();

    while (gameboard.board[rowRandom][columnRandom].hit === true) {
      rowRandom = this.random();
      columnRandom = this.random();
    }
    
    this.playerAttackSuccessfully(rowRandom, columnRandom, gameboard);
    gameboard.receiveAttack(rowRandom, columnRandom, container);
  }
}

export default Player;
