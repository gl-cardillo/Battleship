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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixRQUFRO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDhCQUE4QjtBQUNoRDtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9nYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3BsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvc2hpcEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgIHRoaXMuY3JlYXRlQm9hcmQoKTtcbiAgfVxuXG4gIGNyZWF0ZUJvYXJkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgbGV0IGFycmF5MSA9IFtdO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGxldCBhcnJheTIgPSB7IHNoaXA6IGZhbHNlLCBoaXQ6IGZhbHNlIH07XG4gICAgICAgIGFycmF5MS5wdXNoKGFycmF5Mik7XG4gICAgICB9XG4gICAgICB0aGlzLmJvYXJkLnB1c2goYXJyYXkxKTtcbiAgICB9XG4gIH1cblxuICByZXNldEJvYXJkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSB7IHNoaXA6IGZhbHNlLCBoaXQ6IGZhbHNlIH07XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7aX1cIl1bZGF0YS1jb2x1bW49XCIke2p9XCJdYClcbiAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNIaXQocm93LCBjb2x1bW4pIHtcbiAgICByZXR1cm4gdGhpcy5ib2FyZFtyb3ddW2NvbHVtbl0uaGl0O1xuICB9XG5cbiAgc2V0Q29tcHV0ZXJCb2FyZCgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke2l9XCJdW2RhdGEtY29sdW1uPVwiJHtqfVwiXWApXG4gICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJzaGlwXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBsYWNlU2hpcFZlcnRpY2FsbHkoc2hpcHMsIGluaXRpYWxSb3csIGluaXRpYWxDb2x1bW4pIHtcblxuICAgIGxldCBzaGlwTGVuZ3RoID0gc2hpcHNbMF0ubGVuZ3RoOyAgXG4gICAgaWYgKGluaXRpYWxSb3cgKyBzaGlwTGVuZ3RoID4gOSkgcmV0dXJuOyAgIFxuICAgIGlmICh0aGlzLmNoZWNrUG9zaXRpb25Jc0ZyZWUoc2hpcExlbmd0aCwgaW5pdGlhbFJvdywgaW5pdGlhbENvbHVtbiwgdHJ1ZSkpXG4gICAgICByZXR1cm47XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtkYXRhLXJvdz1cIiR7aW5pdGlhbFJvdyArIGl9XCJdW2RhdGEtY29sdW1uPVwiJHtpbml0aWFsQ29sdW1ufVwiXWBcbiAgICAgICAgKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChcInNoaXBcIik7XG4gICAgICB0aGlzLmJvYXJkW2luaXRpYWxSb3cgKyBpXVtpbml0aWFsQ29sdW1uXS5zaGlwID0gdHJ1ZTtcbiAgICB9XG4gICAgc2hpcHMuc2hpZnQoKTtcblxuICB9XG5cbiAgcGxhY2VTaGlwSG9yaXpvbnRhbGx5KHNoaXBzLCBpbml0aWFsUm93LCBpbml0aWFsQ29sdW1uKSB7XG4gICAgbGV0IHNoaXBMZW5ndGggPSBzaGlwc1swXS5sZW5ndGg7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHNoaXAgZG9lc250IGdvIG92ZXIgdGhlIGJvYXJkXG4gICAgaWYgKGluaXRpYWxDb2x1bW4gKyBzaGlwTGVuZ3RoID4gOSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmNoZWNrUG9zaXRpb25Jc0ZyZWUoc2hpcExlbmd0aCwgaW5pdGlhbFJvdywgaW5pdGlhbENvbHVtbiwgZmFsc2UpKVxuICAgICAgcmV0dXJuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEtcm93PVwiJHtpbml0aWFsUm93fVwiXVtkYXRhLWNvbHVtbj1cIiR7aW5pdGlhbENvbHVtbiArIGl9XCJdYFxuICAgICAgICApXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIHRoaXMuYm9hcmRbaW5pdGlhbFJvd11baW5pdGlhbENvbHVtbiArIGldLnNoaXAgPSB0cnVlO1xuICAgIH1cbiAgICBzaGlwcy5zaGlmdCgpO1xuICB9XG4gIC8vIGNoZWNrIHBvc2l0aW9uIHdoZXJlIHRvIHBsYWNlIHNoaXAgaXMgZnJlZSBmcm9tIG90aGVyIHNoaXBcbiAgY2hlY2tQb3NpdGlvbklzRnJlZShzaGlwTGVuZ3RoLCBpbml0aWFsUm93LCBpbml0aWFsQ29sdW1uLCB2ZXJ0aWNhbCkge1xuICAgIC8vYWRkICsxIGZvciBkb250IHBsYWNlIHNoaXAgaW4gYSByb3dcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBMZW5ndGggKyAxOyBqKyspIHtcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICBpZiAgKHRoaXMuYm9hcmRbaW5pdGlhbFJvdyArIGpdW2luaXRpYWxDb2x1bW5dLnNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaW5pdGlhbFJvd11baW5pdGlhbENvbHVtbiArIGpdLnNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4sIGNvbnRhaW5lcikge1xuICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sdW1uXS5oaXQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXS5oaXQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dLnNoaXAgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2x1bW49XCIke2NvbHVtbn1cIl1gKVxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwiaGl0LXdhdGVyXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbHVtbj1cIiR7Y29sdW1ufVwiXWApXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJoaXQtc2hpcFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3VjY2VzZnVsbEhpdHMgPSAwOyAgICBcbiAgfVxuXG4gIHBsYXllckF0dGFja1N1Y2Nlc3NmdWxseShyb3csIGNvbHVtbiwgZ2FtZWJvYXJkKSB7XG4gICAgaWYgKGdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbHVtbl0uc2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5zdWNjZXNmdWxsSGl0cyArPSAxO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0U2NvcmUoKSB7XG4gICAgdGhpcy5zdWNjZXNmdWxsSGl0cyA9IDA7XG4gIH1cblxuICBoYXNXb24oKSB7XG4gICAgaWYgKHRoaXMuc3VjY2VzZnVsbEhpdHMgPT09IDE3KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByYW5kb20oKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgfVxuXG4gIHJhbmRvbUF0dGFjayhnYW1lYm9hcmQsIGNvbnRhaW5lcikge1xuICAgIGxldCByb3dSYW5kb20gPSB0aGlzLnJhbmRvbSgpO1xuICAgIGxldCBjb2x1bW5SYW5kb20gPSB0aGlzLnJhbmRvbSgpO1xuXG4gICAgd2hpbGUgKGdhbWVib2FyZC5ib2FyZFtyb3dSYW5kb21dW2NvbHVtblJhbmRvbV0uaGl0ID09PSB0cnVlKSB7XG4gICAgICByb3dSYW5kb20gPSB0aGlzLnJhbmRvbSgpO1xuICAgICAgY29sdW1uUmFuZG9tID0gdGhpcy5yYW5kb20oKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5wbGF5ZXJBdHRhY2tTdWNjZXNzZnVsbHkocm93UmFuZG9tLCBjb2x1bW5SYW5kb20sIGdhbWVib2FyZCk7XG4gICAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socm93UmFuZG9tLCBjb2x1bW5SYW5kb20sIGNvbnRhaW5lcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9zcmMvZmFjdG9yaWVzL3BsYXllckZhY3RvcnlcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vc3JjL2ZhY3Rvcmllcy9nYW1lYm9hcmRGYWN0b3J5XCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zcmMvZmFjdG9yaWVzL3NoaXBGYWN0b3J5XCI7XG5cbi8vIGluaXRpYWxpemUgNSBkaWZmZXJlbnQgc2hpcHNcbmxldCBjYXJyaWVyID0gbmV3IFNoaXAoNSk7XG5sZXQgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQpO1xubGV0IGRlc3RveWVyID0gbmV3IFNoaXAoMyk7XG5sZXQgc3VibWFyaW5lID0gbmV3IFNoaXAoMyk7XG5sZXQgcGF0cm9sYm9hdCA9IG5ldyBTaGlwKDIpO1xuXG5jb25zdCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRcIik7XG5jb25zdCByb3RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZVwiKTtcbmNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uc1wiKTtcbmNvbnN0IHBsYXllckNvbnRhaWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItY29udGFpbmVyXCIpO1xuY29uc3QgY29tcHV0ZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWNvbnRhaW5lclwiKTtcbmNvbnN0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtY29udGFpbmVyXCIpO1xuXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG5jb25zdCBjb21wdXRlciA9IG5ldyBQbGF5ZXIoKTtcbmNvbnN0IHBsYXllckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuY29uc3QgY29tcHV0ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuZnVuY3Rpb24gZ2FtZSgpIHtcbiAgLy8gaGFuZGxlIGdhbWVcbiAgY29tcHV0ZXJDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgLy8gZ2V0IHdoZXJlIHBsYXllciBhdHRhY2tzXG4gICAgY29uc3Qgcm93ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIik7XG4gICAgY29uc3QgY29sdW1uID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5cIik7XG4gICAgaWYgKCFjb21wdXRlckJvYXJkLmlzSGl0KHJvdywgY29sdW1uKSkge1xuICAgICAgY29tcHV0ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHJvdywgY29sdW1uLCBjb21wdXRlckNvbnRhaW5lcik7XG4gICAgICBwbGF5ZXIucGxheWVyQXR0YWNrU3VjY2Vzc2Z1bGx5KHJvdywgY29sdW1uLCBjb21wdXRlckJvYXJkKTtcbiAgICAgIGNvbXB1dGVyLnJhbmRvbUF0dGFjayhwbGF5ZXJCb2FyZCwgcGxheWVyQ29udGFpZXIpO1xuICAgICAgLy8gY2hlY2sgaWYgY29tcHV0ZXIgb3IgcGxheWVyIHdvblxuICAgICAgaWYgKHBsYXllci5oYXNXb24oKSkge1xuICAgICAgICByZXR1cm4gZW5kR2FtZShcInBsYXllclwiKTtcbiAgICAgIH0gZWxzZSBpZiAoY29tcHV0ZXIuaGFzV29uKCkpIHtcbiAgICAgICAgcmV0dXJuIGVuZEdhbWUoXCJjb21wdXRlclwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRHYW1lKCkge1xuICAvL3ByZXBhcmUgZ2FtZVxuICBjb25zdCBzZXRSYW5kb21seSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFuZG9tXCIpO1xuICBkaXNwbGF5Qm9hcmQocGxheWVyQ29udGFpZXIpO1xuICAvLyByYW5kb21seSBzZXQgc2hpcCBvbiBwbGF5ZXIgYm9hcmRcbiAgbGV0IHJvdGF0aW9uID0gdHJ1ZTtcblxuICByb3RhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAocm90YXRpb24pIHtcbiAgICAgIHJvdGF0aW9uID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJvdGF0aW9uID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGxldCBzaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0b3llciwgc3VibWFyaW5lLCBwYXRyb2xib2F0XTtcbiAgcGxheWVyQ29udGFpZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PlxuICAgIHBsYWNlU2hpcE9uQm9hcmQoZSwgcm90YXRpb24sIHNoaXBzKVxuICApO1xuXG4gIHNldFJhbmRvbWx5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHNoaXBzID0gW2NhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3RveWVyLCBzdWJtYXJpbmUsIHBhdHJvbGJvYXRdO1xuICAgIHN0YXJ0LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xuICAgIHJvdGF0ZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZGlzcGxheVNoaXBPbkJvYXJkKHBsYXllckJvYXJkLCBzaGlwcyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIGxldCBzaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0b3llciwgc3VibWFyaW5lLCBwYXRyb2xib2F0XTtcbiAgYnV0dG9uQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY29tcHV0ZXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgZ2FtZUNvbnRhaW5lci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwic3BhY2UtYXJvdW5kXCI7XG4gIC8vIHNob3cgY29tcHV0ZXIgYm9hcmQgYW5kIHJhbmRvbWx5IHB1dCBzaGlwc1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGRpc3BsYXlCb2FyZChjb21wdXRlckNvbnRhaW5lcik7XG4gIGRpc3BsYXlTaGlwT25Cb2FyZChjb21wdXRlckJvYXJkLCBzaGlwcyk7XG4gIGNvbXB1dGVyQm9hcmQuc2V0Q29tcHV0ZXJCb2FyZCgpO1xuICBnYW1lKCk7XG59XG5cbmZ1bmN0aW9uIGVuZEdhbWUod2lubmVyKSB7XG4gIC8vY3JlYXRlIGVsZW1lbnQgYmlnIGFzIHdpbmRvdyBmb3IgbWFrZSBwbGF5ZXIgdW5hYmxlIHRvIGtlZXAgcGxheWluZ1xuICBjb25zdCBzY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB3aW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB3aW5uZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHBsYXlBZ2FpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgd2lubmVyVGV4dC5jbGFzc0xpc3QuYWRkKFwid2lubmVyLXRleHRcIik7XG4gIHNjcmVlbi5jbGFzc0xpc3QuYWRkKFwiYmFjay1zY3JlZW5cIik7XG4gIHdpbm5lckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwid2lubmVyXCIpO1xuXG4gIHBsYXlBZ2Fpbi50ZXh0Q29udGVudCA9IFwiUGxheSBhZ2FpblwiO1xuICB3aW5uZXJUZXh0LnRleHRDb250ZW50ID0gYCR7d2lubmVyfSB3b24gdGhlIG1hdGNoYDtcbiAgd2lubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHdpbm5lclRleHQpO1xuXG4gIHdpbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5QWdhaW4pO1xuICBzY3JlZW4uYXBwZW5kQ2hpbGQod2lubmVyQ29udGFpbmVyKTtcbiAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzY3JlZW4pO1xuXG4gIC8vIGlmIHBsYXkgYWdhaW4sIHJlc2V0IGJvYXJkIGFuZCBzY29yZSwgcmVtb3ZlIGNvbXB1dGVyIGJvYXJkLCBzaG93IGJ1dHRvbnNcbiAgcGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZ2FtZUNvbnRhaW5lci5yZW1vdmVDaGlsZChzY3JlZW4pO1xuICAgIHBsYXllckJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICBjb21wdXRlckJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICBwbGF5ZXIucmVzZXRTY29yZSgpO1xuICAgIGNvbXB1dGVyLnJlc2V0U2NvcmUoKTtcbiAgICBwbGF5ZXJDb250YWllci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgY29tcHV0ZXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHJlbW92ZUNoaWxkKGNvbXB1dGVyQ29udGFpbmVyKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbnNcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBzdGFydC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgc3RhcnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0R2FtZSk7XG5cbiAgICBzZXRHYW1lKCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZGlzcGxheUJvYXJkKGNvbnRhaW5lcikge1xuICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZpZWxkLmNsYXNzTGlzdC5hZGQoXCJmaWVsZFwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJCb2FyZC5ib2FyZC5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoXCJjb2x1bW5cIik7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXJCb2FyZC5ib2FyZC5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuICAgICAgLy9zZXQgZGF0YSBmb3IgZWFjaCBzcXVhcmVcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiLCBqKTtcbiAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtblwiLCBpKTtcbiAgICAgIGNvbHVtbi5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cbiAgICBmaWVsZC5hcHBlbmRDaGlsZChjb2x1bW4pO1xuICB9XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZpZWxkKTtcbn1cblxuZnVuY3Rpb24gcmFuZG9tTnVtYmVyKCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5U2hpcE9uQm9hcmQocGxheWVyQm9hcmQsIHNoaXBzKSB7XG4gIC8vIHBsYWNlIHNoaXAgb24gYm9hcmQgdmVydGljYWxseSBhbmQgaG9yaXpvbnRhbGx5IHJhbmRvbWx5XG4gIHBsYXllckJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgd2hpbGUgKHNoaXBzLmxlbmd0aCA+IDApIHtcbiAgICBpZiAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMikgPT09IDApIHtcbiAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcFZlcnRpY2FsbHkoc2hpcHMsIHJhbmRvbU51bWJlcigpLCByYW5kb21OdW1iZXIoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcEhvcml6b250YWxseShzaGlwcywgcmFuZG9tTnVtYmVyKCksIHJhbmRvbU51bWJlcigpKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcGxhY2VTaGlwT25Cb2FyZChlLCByb3RhdGlvbiwgc2hpcHMpIHtcbiAgLy8gaWYgY2FsbGVkIHdpdGggdGhlIGxhc3Qgc2hpcCBzaG93IHN0YXIgYnV0dG9uXG4gIGlmIChzaGlwcy5sZW5ndGggPT09IDEpIHtcbiAgICBzdGFydC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgICByb3RhdGUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG4gIGlmIChzaGlwcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICBsZXQgcm93ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIik7XG4gIGxldCBjb2x1bW4gPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbHVtblwiKTtcbiAgcm93ID0gcGFyc2VJbnQocm93KTtcbiAgY29sdW1uID0gcGFyc2VJbnQoY29sdW1uKTtcblxuICBpZiAocm90YXRpb24pIHtcbiAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXBWZXJ0aWNhbGx5KHNoaXBzLCByb3csIGNvbHVtbik7XG4gIH0gZWxzZSB7XG4gICAgcGxheWVyQm9hcmQucGxhY2VTaGlwSG9yaXpvbnRhbGx5KHNoaXBzLCByb3csIGNvbHVtbik7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZChlbGVtZW50KSB7XG4gIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHN0YXJ0R2FtZSgpKTtcblxuc2V0R2FtZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==