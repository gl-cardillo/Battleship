/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factories/gameboardFactory.js":
/*!*******************************************!*\
  !*** ./src/factories/gameboardFactory.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/factories/playerFactory.js":
/*!****************************************!*\
  !*** ./src/factories/playerFactory.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/factories/shipFactory.js":
/*!**************************************!*\
  !*** ./src/factories/shipFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
  constructor(length) {
  this.length = length;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/factories/playerFactory */ "./src/factories/playerFactory.js");
/* harmony import */ var _src_factories_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/factories/gameboardFactory */ "./src/factories/gameboardFactory.js");
/* harmony import */ var _src_factories_shipFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/factories/shipFactory */ "./src/factories/shipFactory.js");




// initialize 5 different ships
let carrier = new _src_factories_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"](5);
let battleship = new _src_factories_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"](4);
let destoyer = new _src_factories_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"](3);
let submarine = new _src_factories_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"](3);
let patrolboat = new _src_factories_shipFactory__WEBPACK_IMPORTED_MODULE_2__["default"](2);

const start = document.querySelector(".start");
const rotate = document.querySelector(".rotate");
const buttonContainer = document.querySelector(".buttons");
const playerContaier = document.querySelector(".player-container");
const computerContainer = document.querySelector(".computer-container");
const gameContainer = document.querySelector(".game-container");

const player = new _src_factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
const computer = new _src_factories_playerFactory__WEBPACK_IMPORTED_MODULE_0__["default"]();
const playerBoard = new _src_factories_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__["default"]();
const computerBoard = new _src_factories_gameboardFactory__WEBPACK_IMPORTED_MODULE_1__["default"]();

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixRQUFRO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDhCQUE4QjtBQUNoRDtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gW107XG4gICAgdGhpcy5jcmVhdGVCb2FyZCgpO1xuICB9XG5cbiAgY3JlYXRlQm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBsZXQgYXJyYXkxID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgbGV0IGFycmF5MiA9IHsgc2hpcDogZmFsc2UsIGhpdDogZmFsc2UgfTtcbiAgICAgICAgYXJyYXkxLnB1c2goYXJyYXkyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYm9hcmQucHVzaChhcnJheTEpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0Qm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9IHsgc2hpcDogZmFsc2UsIGhpdDogZmFsc2UgfTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHtpfVwiXVtkYXRhLWNvbHVtbj1cIiR7an1cIl1gKVxuICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc0hpdChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXS5oaXQ7XG4gIH1cblxuICBzZXRDb21wdXRlckJvYXJkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7aX1cIl1bZGF0YS1jb2x1bW49XCIke2p9XCJdYClcbiAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGxhY2VTaGlwVmVydGljYWxseShzaGlwcywgaW5pdGlhbFJvdywgaW5pdGlhbENvbHVtbikge1xuXG4gICAgbGV0IHNoaXBMZW5ndGggPSBzaGlwc1swXS5sZW5ndGg7ICBcbiAgICBpZiAoaW5pdGlhbFJvdyArIHNoaXBMZW5ndGggPiA5KSByZXR1cm47ICAgXG4gICAgaWYgKHRoaXMuY2hlY2tQb3NpdGlvbklzRnJlZShzaGlwTGVuZ3RoLCBpbml0aWFsUm93LCBpbml0aWFsQ29sdW1uLCB0cnVlKSlcbiAgICAgIHJldHVybjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEtcm93PVwiJHtpbml0aWFsUm93ICsgaX1cIl1bZGF0YS1jb2x1bW49XCIke2luaXRpYWxDb2x1bW59XCJdYFxuICAgICAgICApXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIHRoaXMuYm9hcmRbaW5pdGlhbFJvdyArIGldW2luaXRpYWxDb2x1bW5dLnNoaXAgPSB0cnVlO1xuICAgIH1cbiAgICBzaGlwcy5zaGlmdCgpO1xuXG4gIH1cblxuICBwbGFjZVNoaXBIb3Jpem9udGFsbHkoc2hpcHMsIGluaXRpYWxSb3csIGluaXRpYWxDb2x1bW4pIHtcbiAgICBsZXQgc2hpcExlbmd0aCA9IHNoaXBzWzBdLmxlbmd0aDtcbiAgICAvLyBjaGVjayBpZiB0aGUgc2hpcCBkb2VzbnQgZ28gb3ZlciB0aGUgYm9hcmRcbiAgICBpZiAoaW5pdGlhbENvbHVtbiArIHNoaXBMZW5ndGggPiA5KSByZXR1cm47XG4gICAgaWYgKHRoaXMuY2hlY2tQb3NpdGlvbklzRnJlZShzaGlwTGVuZ3RoLCBpbml0aWFsUm93LCBpbml0aWFsQ29sdW1uLCBmYWxzZSkpXG4gICAgICByZXR1cm47XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGBbZGF0YS1yb3c9XCIke2luaXRpYWxSb3d9XCJdW2RhdGEtY29sdW1uPVwiJHtpbml0aWFsQ29sdW1uICsgaX1cIl1gXG4gICAgICAgIClcbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgICAgdGhpcy5ib2FyZFtpbml0aWFsUm93XVtpbml0aWFsQ29sdW1uICsgaV0uc2hpcCA9IHRydWU7XG4gICAgfVxuICAgIHNoaXBzLnNoaWZ0KCk7XG4gIH1cbiAgLy8gY2hlY2sgcG9zaXRpb24gd2hlcmUgdG8gcGxhY2Ugc2hpcCBpcyBmcmVlIGZyb20gb3RoZXIgc2hpcFxuICBjaGVja1Bvc2l0aW9uSXNGcmVlKHNoaXBMZW5ndGgsIGluaXRpYWxSb3csIGluaXRpYWxDb2x1bW4sIHZlcnRpY2FsKSB7XG4gICAgLy9hZGQgKzEgZm9yIGRvbnQgcGxhY2Ugc2hpcCBpbiBhIHJvd1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcExlbmd0aCArIDE7IGorKykge1xuICAgICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICAgIGlmICAodGhpcy5ib2FyZFtpbml0aWFsUm93ICsgal1baW5pdGlhbENvbHVtbl0uc2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpbml0aWFsUm93XVtpbml0aWFsQ29sdW1uICsgal0uc2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbiwgY29udGFpbmVyKSB7XG4gICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dLmhpdCA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dLmhpdCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0uc2hpcCA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbHVtbj1cIiR7Y29sdW1ufVwiXWApXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJoaXQtd2F0ZXJcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250YWluZXJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sdW1uPVwiJHtjb2x1bW59XCJdYClcbiAgICAgICAgICAuY2xhc3NMaXN0LmFkZChcImhpdC1zaGlwXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7IiwiY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zdWNjZXNmdWxsSGl0cyA9IDA7ICAgIFxuICB9XG5cbiAgcGxheWVyQXR0YWNrU3VjY2Vzc2Z1bGx5KHJvdywgY29sdW1uLCBnYW1lYm9hcmQpIHtcbiAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW3Jvd11bY29sdW1uXS5zaGlwID09PSB0cnVlKSB7XG4gICAgICB0aGlzLnN1Y2Nlc2Z1bGxIaXRzICs9IDE7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRTY29yZSgpIHtcbiAgICB0aGlzLnN1Y2Nlc2Z1bGxIaXRzID0gMDtcbiAgfVxuXG4gIGhhc1dvbigpIHtcbiAgICBpZiAodGhpcy5zdWNjZXNmdWxsSGl0cyA9PT0gMTcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJhbmRvbSgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICB9XG5cbiAgcmFuZG9tQXR0YWNrKGdhbWVib2FyZCwgY29udGFpbmVyKSB7XG4gICAgbGV0IHJvd1JhbmRvbSA9IHRoaXMucmFuZG9tKCk7XG4gICAgbGV0IGNvbHVtblJhbmRvbSA9IHRoaXMucmFuZG9tKCk7XG5cbiAgICB3aGlsZSAoZ2FtZWJvYXJkLmJvYXJkW3Jvd1JhbmRvbV1bY29sdW1uUmFuZG9tXS5oaXQgPT09IHRydWUpIHtcbiAgICAgIHJvd1JhbmRvbSA9IHRoaXMucmFuZG9tKCk7XG4gICAgICBjb2x1bW5SYW5kb20gPSB0aGlzLnJhbmRvbSgpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLnBsYXllckF0dGFja1N1Y2Nlc3NmdWxseShyb3dSYW5kb20sIGNvbHVtblJhbmRvbSwgZ2FtZWJvYXJkKTtcbiAgICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyb3dSYW5kb20sIGNvbHVtblJhbmRvbSwgY29udGFpbmVyKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3NyYy9mYWN0b3JpZXMvcGxheWVyRmFjdG9yeVwiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZEZhY3RvcnlcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NyYy9mYWN0b3JpZXMvc2hpcEZhY3RvcnlcIjtcblxuLy8gaW5pdGlhbGl6ZSA1IGRpZmZlcmVudCBzaGlwc1xubGV0IGNhcnJpZXIgPSBuZXcgU2hpcCg1KTtcbmxldCBiYXR0bGVzaGlwID0gbmV3IFNoaXAoNCk7XG5sZXQgZGVzdG95ZXIgPSBuZXcgU2hpcCgzKTtcbmxldCBzdWJtYXJpbmUgPSBuZXcgU2hpcCgzKTtcbmxldCBwYXRyb2xib2F0ID0gbmV3IFNoaXAoMik7XG5cbmNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydFwiKTtcbmNvbnN0IHJvdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm90YXRlXCIpO1xuY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b25zXCIpO1xuY29uc3QgcGxheWVyQ29udGFpZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1jb250YWluZXJcIik7XG5jb25zdCBjb21wdXRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItY29udGFpbmVyXCIpO1xuY29uc3QgZ2FtZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1jb250YWluZXJcIik7XG5cbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbmNvbnN0IGNvbXB1dGVyID0gbmV3IFBsYXllcigpO1xuY29uc3QgcGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5jb25zdCBjb21wdXRlckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG5mdW5jdGlvbiBnYW1lKCkge1xuICAvLyBoYW5kbGUgZ2FtZVxuICBjb21wdXRlckNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAvLyBnZXQgd2hlcmUgcGxheWVyIGF0dGFja3NcbiAgICBjb25zdCByb3cgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKTtcbiAgICBjb25zdCBjb2x1bW4gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtblwiKTtcbiAgICBpZiAoIWNvbXB1dGVyQm9hcmQuaXNIaXQocm93LCBjb2x1bW4pKSB7XG4gICAgICBjb21wdXRlckJvYXJkLnJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4sIGNvbXB1dGVyQ29udGFpbmVyKTtcbiAgICAgIHBsYXllci5wbGF5ZXJBdHRhY2tTdWNjZXNzZnVsbHkocm93LCBjb2x1bW4sIGNvbXB1dGVyQm9hcmQpO1xuICAgICAgY29tcHV0ZXIucmFuZG9tQXR0YWNrKHBsYXllckJvYXJkLCBwbGF5ZXJDb250YWllcik7XG4gICAgICAvLyBjaGVjayBpZiBjb21wdXRlciBvciBwbGF5ZXIgd29uXG4gICAgICBpZiAocGxheWVyLmhhc1dvbigpKSB7XG4gICAgICAgIHJldHVybiBlbmRHYW1lKFwicGxheWVyXCIpO1xuICAgICAgfSBlbHNlIGlmIChjb21wdXRlci5oYXNXb24oKSkge1xuICAgICAgICByZXR1cm4gZW5kR2FtZShcImNvbXB1dGVyXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldEdhbWUoKSB7XG4gIC8vcHJlcGFyZSBnYW1lXG4gIGNvbnN0IHNldFJhbmRvbWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYW5kb21cIik7XG4gIGRpc3BsYXlCb2FyZChwbGF5ZXJDb250YWllcik7XG4gIC8vIHJhbmRvbWx5IHNldCBzaGlwIG9uIHBsYXllciBib2FyZFxuICBsZXQgcm90YXRpb24gPSB0cnVlO1xuXG4gIHJvdGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChyb3RhdGlvbikge1xuICAgICAgcm90YXRpb24gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm90YXRpb24gPSB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgbGV0IHNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3RveWVyLCBzdWJtYXJpbmUsIHBhdHJvbGJvYXRdO1xuICBwbGF5ZXJDb250YWllci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+XG4gICAgcGxhY2VTaGlwT25Cb2FyZChlLCByb3RhdGlvbiwgc2hpcHMpXG4gICk7XG5cbiAgc2V0UmFuZG9tbHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgc2hpcHMgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdG95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sYm9hdF07XG4gICAgc3RhcnQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgcm90YXRlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkaXNwbGF5U2hpcE9uQm9hcmQocGxheWVyQm9hcmQsIHNoaXBzKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgbGV0IHNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3RveWVyLCBzdWJtYXJpbmUsIHBhdHJvbGJvYXRdO1xuICBidXR0b25Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb21wdXRlckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBnYW1lQ29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJzcGFjZS1hcm91bmRcIjtcbiAgLy8gc2hvdyBjb21wdXRlciBib2FyZCBhbmQgcmFuZG9tbHkgcHV0IHNoaXBzXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgZGlzcGxheUJvYXJkKGNvbXB1dGVyQ29udGFpbmVyKTtcbiAgZGlzcGxheVNoaXBPbkJvYXJkKGNvbXB1dGVyQm9hcmQsIHNoaXBzKTtcbiAgY29tcHV0ZXJCb2FyZC5zZXRDb21wdXRlckJvYXJkKCk7XG4gIGdhbWUoKTtcbn1cblxuZnVuY3Rpb24gZW5kR2FtZSh3aW5uZXIpIHtcbiAgLy9jcmVhdGUgZWxlbWVudCBiaWcgYXMgd2luZG93IGZvciBtYWtlIHBsYXllciB1bmFibGUgdG8ga2VlcCBwbGF5aW5nXG4gIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHdpbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHdpbm5lclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgcGxheUFnYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICB3aW5uZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXItdGV4dFwiKTtcbiAgc2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJiYWNrLXNjcmVlblwiKTtcbiAgd2lubmVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXJcIik7XG5cbiAgcGxheUFnYWluLnRleHRDb250ZW50ID0gXCJQbGF5IGFnYWluXCI7XG4gIHdpbm5lclRleHQudGV4dENvbnRlbnQgPSBgJHt3aW5uZXJ9IHdvbiB0aGUgbWF0Y2hgO1xuICB3aW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2lubmVyVGV4dCk7XG5cbiAgd2lubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXlBZ2Fpbik7XG4gIHNjcmVlbi5hcHBlbmRDaGlsZCh3aW5uZXJDb250YWluZXIpO1xuICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNjcmVlbik7XG5cbiAgLy8gaWYgcGxheSBhZ2FpbiwgcmVzZXQgYm9hcmQgYW5kIHNjb3JlLCByZW1vdmUgY29tcHV0ZXIgYm9hcmQsIHNob3cgYnV0dG9uc1xuICBwbGF5QWdhaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBnYW1lQ29udGFpbmVyLnJlbW92ZUNoaWxkKHNjcmVlbik7XG4gICAgcGxheWVyQm9hcmQucmVzZXRCb2FyZCgpO1xuICAgIGNvbXB1dGVyQm9hcmQucmVzZXRCb2FyZCgpO1xuICAgIHBsYXllci5yZXNldFNjb3JlKCk7XG4gICAgY29tcHV0ZXIucmVzZXRTY29yZSgpO1xuICAgIHBsYXllckNvbnRhaWVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBjb21wdXRlckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcmVtb3ZlQ2hpbGQoY29tcHV0ZXJDb250YWluZXIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uc1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHN0YXJ0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBzdGFydC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRHYW1lKTtcblxuICAgIHNldEdhbWUoKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBkaXNwbGF5Qm9hcmQoY29udGFpbmVyKSB7XG4gIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmllbGQuY2xhc3NMaXN0LmFkZChcImZpZWxkXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckJvYXJkLmJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImNvbHVtblwiKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllckJvYXJkLmJvYXJkLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG4gICAgICAvL3NldCBkYXRhIGZvciBlYWNoIHNxdWFyZVxuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEtcm93XCIsIGopO1xuICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uXCIsIGkpO1xuICAgICAgY29sdW1uLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICAgIGZpZWxkLmFwcGVuZENoaWxkKGNvbHVtbik7XG4gIH1cblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmllbGQpO1xufVxuXG5mdW5jdGlvbiByYW5kb21OdW1iZXIoKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlTaGlwT25Cb2FyZChwbGF5ZXJCb2FyZCwgc2hpcHMpIHtcbiAgLy8gcGxhY2Ugc2hpcCBvbiBib2FyZCB2ZXJ0aWNhbGx5IGFuZCBob3Jpem9udGFsbHkgcmFuZG9tbHlcbiAgcGxheWVyQm9hcmQucmVzZXRCb2FyZCgpO1xuICB3aGlsZSAoc2hpcHMubGVuZ3RoID4gMCkge1xuICAgIGlmIChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKSA9PT0gMCkge1xuICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwVmVydGljYWxseShzaGlwcywgcmFuZG9tTnVtYmVyKCksIHJhbmRvbU51bWJlcigpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwSG9yaXpvbnRhbGx5KHNoaXBzLCByYW5kb21OdW1iZXIoKSwgcmFuZG9tTnVtYmVyKCkpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXBPbkJvYXJkKGUsIHJvdGF0aW9uLCBzaGlwcykge1xuICAvLyBpZiBjYWxsZWQgd2l0aCB0aGUgbGFzdCBzaGlwIHNob3cgc3RhciBidXR0b25cbiAgaWYgKHNoaXBzLmxlbmd0aCA9PT0gMSkge1xuICAgIHN0YXJ0LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgIHJvdGF0ZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbiAgaWYgKHNoaXBzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gIGxldCByb3cgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKTtcbiAgbGV0IGNvbHVtbiA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uXCIpO1xuICByb3cgPSBwYXJzZUludChyb3cpO1xuICBjb2x1bW4gPSBwYXJzZUludChjb2x1bW4pO1xuXG4gIGlmIChyb3RhdGlvbikge1xuICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcFZlcnRpY2FsbHkoc2hpcHMsIHJvdywgY29sdW1uKTtcbiAgfSBlbHNlIHtcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXBIb3Jpem9udGFsbHkoc2hpcHMsIHJvdywgY29sdW1uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZChlbGVtZW50KSB7XG4gIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHN0YXJ0R2FtZSgpKTtcblxuc2V0R2FtZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==