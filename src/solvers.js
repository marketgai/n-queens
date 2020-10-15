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

window.findNRooksSolution = function(n) {
  var solution = undefined;
  for (var xStart = 0; xStart < n; xStart++) {
    var instance = new Board({n: n});
    console.log(instance);
    var board = instance.attributes;
    instance.togglePiece(0, xStart);//(y, x)
    var piecesPlaced = 1;
    //var x = 0;
    var otherPieces = function(y) {
      if (y > (n - 1)) {
        return;
      } else {
        for (var x = 0; x < (n - 1); x++) {
          instance.togglePiece(y, x);
          if (board.hasAnyRowConflicts || board.hasAnyColConflicts) {
            instance.togglePiece(y, x);
            continue;
          } else {
            piecesPlaced++;
            console.log('placed one');
            if (piecesPlaced === n) {
              solution = board;
              console.log('solution found');
              return;
            } else {
              otherPieces(y + 1);
            }
          }
        }
      }
    };
    //if (solution !== undefined) {
    console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
    return solution;
    //}
  }
};
//base case - if reach end of board and piecesPlaced < n, return to break out of recursive function
//increment Yval, start at xVal = 0;
//keep an element of the board constant- yVal(row)






// for (var yVal = 1; yVal < n; yVal++) {
//   for (var xVal = 0; xVal < n; xVal++) {
//     togglePiece(xVal, yVal);
//     if (this.hasAnyRowConflicts || this.hasAnyColConflicts) {
//       continue;
//     } else {
//       otherpieces();
//     }
//   }
// }

//  recursive function to place next piece and check if there is conflicts..
//   if row or column conflict, continue
//   else, move to next row and call recursion until last row is done.
//   if finish last row, add this board to solution array.



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  var board = new Board({n: n});

  var findSolution = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyRowConflicts() && !board.hasAnyColConflicts()) {
        findSolution(row + 1);
      }
      board.togglePiece(row, i);
    }
  };

  findSolution(0);

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
