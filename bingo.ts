// There is also `bingo-simple-data.ts` file available for simplified debugging or testing. Feel free to use or not use this file.
// import { numbers, cards } from './bingo-data-simple';
// import { numbers, cards } from './bingo-data';

// const {numbers, cards} = require('./bingo-data-simple');
const {numbers, cards} = require('./bingo-data');

const bingo = (nums, boards) => {
  console.log("Let's play bingo!");

  // use this if we want to return original board without Trues (deep copy instead of shallow)
  // let cardsCopy = structuredClone(boards);

  // use this if we want to return board showing where it matched (as Trues)
  let cardsCopy = boards.slice();

  const updateRow = (row, num) => {
    for (let i = 0; i < row.length; i++) {
      if (row[i] == num) {
        row[i] = true;
      }
    }
  }

  const checkRow = (row) => {
    for (let item of row) {
      if (item !== true) {
        return false;
      }
    }
    return true;
  }

  const checkCol = (board, column) => {
    const ROWS = board.length;

    for (let r = 0; r < ROWS; r++) {
      if (board[r][column] != true) {
        return false
      }
    }
    return true;
  }

  const checkWinner = () => {
    for (let i = 0; i < cardsCopy.length; i++) {
      // since n x n board, can use the same index
      for (let n = 0; n < cardsCopy[i].length; n++) {

        //check rows, if a row returns true, return right away
        if (checkRow(cardsCopy[i][n])) {
          console.log("winner (row): ", i, boards[i]);
          return (boards[i])
        }

        //check cols, if a col returns true, return right away
        if (checkCol(cardsCopy[i], n)) {
          console.log("winner (col): ", i, boards[i])
          return (boards[i])
        }
      }
    }
  };

  const calcScore = (board, lastN) => {
    let score = 0;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] !== true) {
          score += board[i][j];
        }
      }
    }
    return score * lastN
  }

  // go through all numbers and update, check for winners while going through numbers 
  for (let n of nums) {
    for (let i = 0; i < cardsCopy.length; i++ ) {
      for (let row of cardsCopy[i]) {
        updateRow(row, n);
        const winner = checkWinner();
        if (winner) {
          console.log("last number: ", n);
          console.log("score: ", calcScore(winner, n));
          return winner;
        };
      }
    }
  }

}



bingo(numbers, cards);
