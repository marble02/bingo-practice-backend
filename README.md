# Let's Play Bingo!

Bingo is a game played on boards, each with a 5x5 grid of numbers. Each number on the board is randomly arranged with the possibilities of numbers 1 – 99.

For example, a board may look like this:

```
22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19
```

The host draws numbers at random, one at a time. When a number is drawn, players will mark the matching number if it appears on their board.

A player wins the game if they have a row or column on their board with all of the numbers marked (no diagonals).

[Bingo.txt](/bingo.txt) contains 99 random bingo boards, along with a random order of numbers that our bingo host has drawn.

**🏁 Challenge 1: Find the first winning board**

**🏁 Challenge 2: Calculate the winning board's score**
To calculate the score of a board, start by finding the sum of all unmarked numbers on that board. Then, multiply that sum by the number that was just called when the board won. This is the final score.

## The Project

- `bingo.ts` is where you will write your script to find the first winning bingo board. This file exports a function, `bingo()`, that should return the final score.
- `bingo-data.ts` contains the bingo boards and numbers
- `bingo.test.ts` is where we'll check the return value of `bingo()` to see if it's correct (currently set up for challenge 2).

_Things to note:_

- You can reformat the bingo data however you want.
- The project supports Typescript but you can use Javascript if you would like.

## Running it

First clone the project and install the dependencies with `npm install`.

Then you can run the project with these commands:

- `npm start` runs the bingo file (`bingo.ts`)
- `npm test` runs the test file (`bingo.test.ts`) to find out if your answer is correct.

Let's play!
