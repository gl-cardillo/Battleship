import Player from "./src/factories/playerFactory";
import Gameboard from "./src/factories/gameboardFactory";
import Ship from "./src/factories/shipFactory";

// initialize 5 different ships
let carrier = new Ship(5);
let battleship = new Ship(4);
let destoyer = new Ship(3);
let submarine = new Ship(3);
let patrolboat = new Ship(2);

const start = document.querySelector(".start");
const rotate = document.querySelector(".rotate");
const buttonContainer = document.querySelector(".buttons");
const playerContaier = document.querySelector(".player-container");
const computerContainer = document.querySelector(".computer-container");
const gameContainer = document.querySelector(".game-container");

const player = new Player();
const computer = new Player();
const playerBoard = new Gameboard();
const computerBoard = new Gameboard();

function game() {
  // handle game
  computerContainer.addEventListener("click", (e) => {
    // get where player attacks
    const row = e.target.getAttribute("data-row");
    const column = e.target.getAttribute("data-column");
    if (!computerBoard.isHit(row, column)) {
      computerBoard.receiveAttack(row, column, computerContainer);
      player.playerAttackSuccessfully(row, column, computerBoard);
      computer.randomAttack(playerBoard, playerContaier);
      // check if computer or player won
      if (player.hasWon()) {
        return endGame("player");
      } else if (computer.hasWon()) {
        return endGame("computer");
      }
    }
  });
}

function setGame() {
  //prepare game
  const setRandomly = document.querySelector(".random");
  displayBoard(playerContaier);
  // randomly set ship on player board
  let rotation = true;

  rotate.addEventListener("click", () => {
    if (rotation) {
      rotation = false;
    } else {
      rotation = true;
    }
  });

  let ships = [carrier, battleship, destoyer, submarine, patrolboat];
  playerContaier.addEventListener("click", (e) =>
    placeShipOnBoard(e, rotation, ships)
  );

  setRandomly.addEventListener("click", () => {
    let ships = [carrier, battleship, destoyer, submarine, patrolboat];
    start.style.display = "inline";
    rotate.style.display = "none";
    displayShipOnBoard(playerBoard, ships);
  });
}

function startGame() {
  let ships = [carrier, battleship, destoyer, submarine, patrolboat];
  buttonContainer.style.display = "none";
  computerContainer.style.display = "block";
  gameContainer.style.justifyContent = "space-around";
  // show computer board and randomly put ships
  document.querySelector(".computer").style.display = "block";
  displayBoard(computerContainer);
  displayShipOnBoard(computerBoard, ships);
  computerBoard.setComputerBoard();
  game();
}

function endGame(winner) {
  //create element big as window for make player unable to keep playing
  const screen = document.createElement("div");
  const winnerContainer = document.createElement("div");
  const winnerText = document.createElement("p");
  const playAgain = document.createElement("button");

  winnerText.classList.add("winner-text");
  screen.classList.add("back-screen");
  winnerContainer.classList.add("winner");

  playAgain.textContent = "Play again";
  winnerText.textContent = `${winner} won the match`;
  winnerContainer.appendChild(winnerText);

  winnerContainer.appendChild(playAgain);
  screen.appendChild(winnerContainer);
  gameContainer.appendChild(screen);

  // if play again, reset board and score, remove computer board, show buttons
  playAgain.addEventListener("click", () => {
    gameContainer.removeChild(screen);
    playerBoard.resetBoard();
    computerBoard.resetBoard();
    player.resetScore();
    computer.resetScore();
    playerContaier.textContent = "";
    computerContainer.style.display = "none";
    removeChild(computerContainer);
    document.querySelector(".computer").style.display = "none";
    document.querySelector(".buttons").style.display = "block";
    start.style.display = "none";
    start.removeEventListener("click", startGame);

    setGame();
  });
}
function displayBoard(container) {
  const field = document.createElement("div");
  field.classList.add("field");
  for (let i = 0; i < playerBoard.board.length; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    for (let j = 0; j < playerBoard.board.length; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      //set data for each square
      square.setAttribute("data-row", j);
      square.setAttribute("data-column", i);
      column.appendChild(square);
    }
    field.appendChild(column);
  }

  container.appendChild(field);
}

function randomNumber() {
  return Math.floor(Math.random() * 10);
}

function displayShipOnBoard(playerBoard, ships) {
  // place ship on board vertically and horizontally randomly
  playerBoard.resetBoard();
  while (ships.length > 0) {
    if (Math.floor(Math.random() * 2) === 0) {
      playerBoard.placeShipVertically(ships, randomNumber(), randomNumber());
    } else {
      playerBoard.placeShipHorizontally(ships, randomNumber(), randomNumber());
    }
  }
}

function placeShipOnBoard(e, rotation, ships) {
  // if called with the last ship show star button
  if (ships.length === 1) {
    start.style.display = "inline";
    rotate.style.display = "none";
  }
  if (ships.length === 0) return;

  let row = e.target.getAttribute("data-row");
  let column = e.target.getAttribute("data-column");
  row = parseInt(row);
  column = parseInt(column);

  if (rotation) {
    playerBoard.placeShipVertically(ships, row, column);
  } else {
    playerBoard.placeShipHorizontally(ships, row, column);
  }
}


function removeChild(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

start.addEventListener("click", () => startGame());

setGame();