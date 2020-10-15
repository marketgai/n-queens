/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting

// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


/*
INPUT:
  a number (n)
OUTPUT:
  an array of arrays representing a board with a completed solution
CONSTRAINTS:
  if n is not a number return null
EDGE CASES:
  if n is <= 0 return null
*/

window.findNRooksSolution = function(n) {
  if (typeof n !== 'number' || n <= 0) {
    return null;
  }
  var solution;

  const placePieces = function(currY, currX) {
    // if we've reached the last (bottom right) space on the board
    if (currX === n - 1 && currY === n - 1) {
      // if we haven't placed all the pieces yet
      if (numOfPieces < n) {
        // if placing a piece on the last space wouldn't cause a conflict
        if (!instance.hasRowConflictAt(currY) && !instance.hasColConflictAt(currX)) {
          // place a piece
          instance.togglePiece(currY, currX);
          // increment number of pieces
          numOfPieces++;
          // if number of pieces equals n
          if (numOfPieces === n) {
            // return solution
            solution = board;
            return solution;
          // if number of pieces does not equal n
          } else {
            // break out of recursion
            return;
          }
        }
      }
    // if we're not at the last space yet
    } else {
      // if current space causes vertical or horizontal conflict
      if (instance.hasColConflictAt(currX) || instance.hasRowConflictAt(currY)) {
        // recursively invoke function again
        // if we've reached the end of a row
        if (currX === n - 1) {
          // placePieces(curry + 1, 0)
          return placePieces(currY + 1, 0);
        // if we're not at the end of a row
        } else {
          // placePieces(currY, currX + 1)
          return placePieces(currY, currX + 1);
        }
      // else if there is no conflict
      } else {
        // place a piece there
        instance.togglePiece(currY, currX);
        numOfPieces++;
        // recursively invoke function again
        // if we've reached the end of a row
        if (currX === n - 1) {
          // placePieces(curry + 1, 0)
          return placePieces(currY + 1, 0);
        // if we're not at the end of a row
        } else {
          // placePieces(currY, currX + 1)
          return placePieces(currY, currX + 1);
        }
      }
    }
  };

  for (var x = 0; x < n; x++) {
    var instance = new Board({'n': n});
    var board = instance.attributes;
    instance.togglePiece(0, x);
    var numOfPieces = 1;
    placePieces(1, 0);
  }

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};