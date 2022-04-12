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
  setRandomly.addEventListener("click", () => {
    let ships = [carrier, battleship, destoyer, submarine, patrolboat];
    start.style.display = "inline";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4QkFBOEI7QUFDaEQ7QUFDQTtBQUNBLG9CQUFvQiw4QkFBOEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixRQUFRO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL2dhbWVib2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvcGxheWVyRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkID0gW107XG4gICAgdGhpcy5jcmVhdGVCb2FyZCgpO1xuICB9XG5cbiAgY3JlYXRlQm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBsZXQgYXJyYXkxID0gW107XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgbGV0IGFycmF5MiA9IHsgc2hpcDogZmFsc2UsIGhpdDogZmFsc2UgfTtcbiAgICAgICAgYXJyYXkxLnB1c2goYXJyYXkyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYm9hcmQucHVzaChhcnJheTEpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0Qm9hcmQoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgdGhpcy5ib2FyZFtpXVtqXSA9IHsgc2hpcDogZmFsc2UsIGhpdDogZmFsc2UgfTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHtpfVwiXVtkYXRhLWNvbHVtbj1cIiR7an1cIl1gKVxuICAgICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKFwic2hpcFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpc0hpdChyb3csIGNvbHVtbikge1xuICAgIHJldHVybiB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXS5oaXQ7XG4gIH1cblxuICBzZXRDb21wdXRlckJvYXJkKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7aX1cIl1bZGF0YS1jb2x1bW49XCIke2p9XCJdYClcbiAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcInNoaXBcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGxhY2VTaGlwVmVydGljYWxseShzaGlwcywgaW5pdGlhbFJvdywgaW5pdGlhbENvbHVtbikge1xuICAgIGxldCBzaGlwTGVuZ3RoID0gc2hpcHNbMF0ubGVuZ3RoO1xuICAgIGlmIChpbml0aWFsUm93ICsgc2hpcExlbmd0aCA+IDkpIHJldHVybjtcbiAgICBpZiAodGhpcy5jaGVja1Bvc2l0aW9uSXNGcmVlKHNoaXBMZW5ndGgsIGluaXRpYWxSb3csIGluaXRpYWxDb2x1bW4sIHRydWUpKVxuICAgICAgcmV0dXJuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEtcm93PVwiJHtpbml0aWFsUm93ICsgaX1cIl1bZGF0YS1jb2x1bW49XCIke2luaXRpYWxDb2x1bW59XCJdYFxuICAgICAgICApXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIHRoaXMuYm9hcmRbaW5pdGlhbFJvdyArIGldW2luaXRpYWxDb2x1bW5dLnNoaXAgPSB0cnVlO1xuICAgIH1cbiAgICBzaGlwcy5zaGlmdCgpO1xuICB9XG5cbiAgcGxhY2VTaGlwSG9yaXpvbnRhbGx5KHNoaXBzLCBpbml0aWFsUm93LCBpbml0aWFsQ29sdW1uKSB7XG4gICAgbGV0IHNoaXBMZW5ndGggPSBzaGlwc1swXS5sZW5ndGg7XG4gICAgLy8gY2hlY2sgaWYgdGhlIHNoaXAgZG9lc250IGdvIG92ZXIgdGhlIGJvYXJkXG4gICAgaWYgKGluaXRpYWxDb2x1bW4gKyBzaGlwTGVuZ3RoID4gOSkgcmV0dXJuO1xuICAgIGlmICh0aGlzLmNoZWNrUG9zaXRpb25Jc0ZyZWUoc2hpcExlbmd0aCwgaW5pdGlhbFJvdywgaW5pdGlhbENvbHVtbiwgZmFsc2UpKVxuICAgICAgcmV0dXJuO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgW2RhdGEtcm93PVwiJHtpbml0aWFsUm93fVwiXVtkYXRhLWNvbHVtbj1cIiR7aW5pdGlhbENvbHVtbiArIGl9XCJdYFxuICAgICAgICApXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICAgIHRoaXMuYm9hcmRbaW5pdGlhbFJvd11baW5pdGlhbENvbHVtbiArIGldLnNoaXAgPSB0cnVlO1xuICAgIH1cbiAgICBzaGlwcy5zaGlmdCgpO1xuICB9XG4gIC8vIGNoZWNrIHBvc2l0aW9uIHdoZXJlIHRvIHBsYWNlIHNoaXAgaXMgZnJlZSBmcm9tIG90aGVyIHNoaXBcbiAgY2hlY2tQb3NpdGlvbklzRnJlZShzaGlwTGVuZ3RoLCBpbml0aWFsUm93LCBpbml0aWFsQ29sdW1uLCB2ZXJ0aWNhbCkge1xuICAgIC8vYWRkICsxIGZvciBkb250IHBsYWNlIHNoaXAgaW4gYSByb3dcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBMZW5ndGggKyAxOyBqKyspIHtcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICBpZiAgKHRoaXMuYm9hcmRbaW5pdGlhbFJvdyArIGpdW2luaXRpYWxDb2x1bW5dLnNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaW5pdGlhbFJvd11baW5pdGlhbENvbHVtbiArIGpdLnNoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4sIGNvbnRhaW5lcikge1xuICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sdW1uXS5oaXQgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmJvYXJkW3Jvd11bY29sdW1uXS5oaXQgPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2x1bW5dLnNoaXAgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRhaW5lclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2x1bW49XCIke2NvbHVtbn1cIl1gKVxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwiaGl0LXdhdGVyXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbHVtbj1cIiR7Y29sdW1ufVwiXWApXG4gICAgICAgICAgLmNsYXNzTGlzdC5hZGQoXCJoaXQtc2hpcFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkOyIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3VjY2VzZnVsbEhpdHMgPSAwOyAgICBcbiAgfVxuXG4gIHBsYXllckF0dGFja1N1Y2Nlc3NmdWxseShyb3csIGNvbHVtbiwgZ2FtZWJvYXJkKSB7XG4gICAgaWYgKGdhbWVib2FyZC5ib2FyZFtyb3ddW2NvbHVtbl0uc2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5zdWNjZXNmdWxsSGl0cyArPSAxO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0U2NvcmUoKSB7XG4gICAgdGhpcy5zdWNjZXNmdWxsSGl0cyA9IDA7XG4gIH1cblxuICBoYXNXb24oKSB7XG4gICAgaWYgKHRoaXMuc3VjY2VzZnVsbEhpdHMgPT09IDE3KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByYW5kb20oKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgfVxuXG4gIHJhbmRvbUF0dGFjayhnYW1lYm9hcmQsIGNvbnRhaW5lcikge1xuICAgIGxldCByb3dSYW5kb20gPSB0aGlzLnJhbmRvbSgpO1xuICAgIGxldCBjb2x1bW5SYW5kb20gPSB0aGlzLnJhbmRvbSgpO1xuXG4gICAgd2hpbGUgKGdhbWVib2FyZC5ib2FyZFtyb3dSYW5kb21dW2NvbHVtblJhbmRvbV0uaGl0ID09PSB0cnVlKSB7XG4gICAgICByb3dSYW5kb20gPSB0aGlzLnJhbmRvbSgpO1xuICAgICAgY29sdW1uUmFuZG9tID0gdGhpcy5yYW5kb20oKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5wbGF5ZXJBdHRhY2tTdWNjZXNzZnVsbHkocm93UmFuZG9tLCBjb2x1bW5SYW5kb20sIGdhbWVib2FyZCk7XG4gICAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socm93UmFuZG9tLCBjb2x1bW5SYW5kb20sIGNvbnRhaW5lcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9zcmMvZmFjdG9yaWVzL3BsYXllckZhY3RvcnlcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vc3JjL2ZhY3Rvcmllcy9nYW1lYm9hcmRGYWN0b3J5XCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zcmMvZmFjdG9yaWVzL3NoaXBGYWN0b3J5XCI7XG5cbi8vIGluaXRpYWxpemUgNSBkaWZmZXJlbnQgc2hpcHNcbmxldCBjYXJyaWVyID0gbmV3IFNoaXAoNSk7XG5sZXQgYmF0dGxlc2hpcCA9IG5ldyBTaGlwKDQpO1xubGV0IGRlc3RveWVyID0gbmV3IFNoaXAoMyk7XG5sZXQgc3VibWFyaW5lID0gbmV3IFNoaXAoMyk7XG5sZXQgcGF0cm9sYm9hdCA9IG5ldyBTaGlwKDIpO1xuXG5jb25zdCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRcIik7XG5jb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbnNcIik7XG5jb25zdCBwbGF5ZXJDb250YWllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWNvbnRhaW5lclwiKTtcbmNvbnN0IGNvbXB1dGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1jb250YWluZXJcIik7XG5jb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLWNvbnRhaW5lclwiKTtcblxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigpO1xuY29uc3QgY29tcHV0ZXIgPSBuZXcgUGxheWVyKCk7XG5jb25zdCBwbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbmNvbnN0IGNvbXB1dGVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cbmZ1bmN0aW9uIGdhbWUoKSB7XG4gIC8vIGhhbmRsZSBnYW1lXG4gIGNvbXB1dGVyQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIC8vIGdldCB3aGVyZSBwbGF5ZXIgYXR0YWNrc1xuICAgIGNvbnN0IHJvdyA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcm93XCIpO1xuICAgIGNvbnN0IGNvbHVtbiA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29sdW1uXCIpO1xuICAgIGlmICghY29tcHV0ZXJCb2FyZC5pc0hpdChyb3csIGNvbHVtbikpIHtcbiAgICAgIGNvbXB1dGVyQm9hcmQucmVjZWl2ZUF0dGFjayhyb3csIGNvbHVtbiwgY29tcHV0ZXJDb250YWluZXIpO1xuICAgICAgcGxheWVyLnBsYXllckF0dGFja1N1Y2Nlc3NmdWxseShyb3csIGNvbHVtbiwgY29tcHV0ZXJCb2FyZCk7XG4gICAgICBjb21wdXRlci5yYW5kb21BdHRhY2socGxheWVyQm9hcmQsIHBsYXllckNvbnRhaWVyKTtcbiAgICAgIC8vIGNoZWNrIGlmIGNvbXB1dGVyIG9yIHBsYXllciB3b25cbiAgICAgIGlmIChwbGF5ZXIuaGFzV29uKCkpIHtcbiAgICAgICAgcmV0dXJuIGVuZEdhbWUoXCJwbGF5ZXJcIik7XG4gICAgICB9IGVsc2UgaWYgKGNvbXB1dGVyLmhhc1dvbigpKSB7XG4gICAgICAgIHJldHVybiBlbmRHYW1lKFwiY29tcHV0ZXJcIik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0R2FtZSgpIHtcbi8vcHJlcGFyZSBnYW1lXG4gIGNvbnN0IHNldFJhbmRvbWx5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYW5kb21cIik7XG4gIGRpc3BsYXlCb2FyZChwbGF5ZXJDb250YWllcik7XG4vLyByYW5kb21seSBzZXQgc2hpcCBvbiBwbGF5ZXIgYm9hcmRcbiAgc2V0UmFuZG9tbHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgc2hpcHMgPSBbY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdG95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sYm9hdF07XG4gICAgc3RhcnQuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lXCI7XG4gICAgZGlzcGxheVNoaXBPbkJvYXJkKHBsYXllckJvYXJkLCBzaGlwcyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIGxldCBzaGlwcyA9IFtjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0b3llciwgc3VibWFyaW5lLCBwYXRyb2xib2F0XTtcbiAgYnV0dG9uQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY29tcHV0ZXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgZ2FtZUNvbnRhaW5lci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwic3BhY2UtYXJvdW5kXCI7XG4gIC8vIHNob3cgY29tcHV0ZXIgYm9hcmQgYW5kIHJhbmRvbWx5IHB1dCBzaGlwc1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGRpc3BsYXlCb2FyZChjb21wdXRlckNvbnRhaW5lcik7XG4gIGRpc3BsYXlTaGlwT25Cb2FyZChjb21wdXRlckJvYXJkLCBzaGlwcyk7XG4gIGNvbXB1dGVyQm9hcmQuc2V0Q29tcHV0ZXJCb2FyZCgpO1xuICBnYW1lKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlCb2FyZChjb250YWluZXIpIHtcbiAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmaWVsZC5jbGFzc0xpc3QuYWRkKFwiZmllbGRcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQm9hcmQuYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uXCIpO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyQm9hcmQuYm9hcmQubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcbiAgICAgIC8vc2V0IGRhdGEgZm9yIGVhY2ggc3F1YXJlXG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIiwgaik7XG4gICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2x1bW5cIiwgaSk7XG4gICAgICBjb2x1bW4uYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gICAgZmllbGQuYXBwZW5kQ2hpbGQoY29sdW1uKTtcbiAgfVxuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmaWVsZCk7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbU51bWJlcigpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVNoaXBPbkJvYXJkKHBsYXllckJvYXJkLCBzaGlwcykge1xuICAvLyBwbGFjZSBzaGlwIG9uIGJvYXJkIHZlcnRpY2FsbHkgYW5kIGhvcml6b250YWxseSByYW5kb21seVxuICBwbGF5ZXJCb2FyZC5yZXNldEJvYXJkKCk7XG4gIHdoaWxlIChzaGlwcy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpID09PSAwKSB7XG4gICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXBWZXJ0aWNhbGx5KHNoaXBzLCByYW5kb21OdW1iZXIoKSwgcmFuZG9tTnVtYmVyKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXBIb3Jpem9udGFsbHkoc2hpcHMsIHJhbmRvbU51bWJlcigpLCByYW5kb21OdW1iZXIoKSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGVuZEdhbWUod2lubmVyKSB7XG4gIC8vY3JlYXRlIGVsZW1lbnQgYmlnIGFzIHdpbmRvdyBmb3IgbWFrZSBwbGF5ZXIgdW5hYmxlIHRvIGtlZXAgcGxheWluZ1xuXG4gIGNvbnN0IHNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHdpbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHdpbm5lclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgcGxheUFnYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICB3aW5uZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXItdGV4dFwiKTtcbiAgc2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJiYWNrLXNjcmVlblwiKTtcbiAgd2lubmVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ3aW5uZXJcIik7XG5cbiAgcGxheUFnYWluLnRleHRDb250ZW50ID0gXCJQbGF5IGFnYWluXCI7XG4gIHdpbm5lclRleHQudGV4dENvbnRlbnQgPSBgJHt3aW5uZXJ9IHdvbiB0aGUgbWF0Y2hgO1xuICB3aW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2lubmVyVGV4dCk7XG5cbiAgd2lubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXlBZ2Fpbik7XG4gIHNjcmVlbi5hcHBlbmRDaGlsZCh3aW5uZXJDb250YWluZXIpO1xuICBnYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNjcmVlbik7XG5cbi8vIGlmIHBsYXkgYWdhaW4sIHJlc2V0IGJvYXJkIGFuZCBzY29yZSwgcmVtb3ZlIGNvbXB1dGVyIGJvYXJkLCBzaG93IGJ1dHRvbnNcbiAgcGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZ2FtZUNvbnRhaW5lci5yZW1vdmVDaGlsZChzY3JlZW4pO1xuICAgIHBsYXllckJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICBjb21wdXRlckJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICBwbGF5ZXIucmVzZXRTY29yZSgpO1xuICAgIGNvbXB1dGVyLnJlc2V0U2NvcmUoKTtcbiAgICBwbGF5ZXJDb250YWllci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgY29tcHV0ZXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHJlbW92ZUNoaWxkKGNvbXB1dGVyQ29udGFpbmVyKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbnNcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBzdGFydC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgc3RhcnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0R2FtZSk7XG5cbiAgICBzZXRHYW1lKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDaGlsZChlbGVtZW50KSB7XG4gIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHN0YXJ0R2FtZSgpKTtcblxuc2V0R2FtZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==