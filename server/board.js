// legend
  // 0 light square
  // 1 dark square
  // 2 dark square with red piece on it
  // 3 dark square with black piece on it


const startBoard = [
    [0, 2, 0, 2, 0, 2, 0, 2],
    [2, 0, 2, 0, 2, 0, 2, 0],
    [0, 2, 0, 2, 0, 2, 0, 2],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [3, 0, 3, 0, 3, 0, 3, 0],
    [0, 3, 0, 3, 0, 3, 0, 3],
    [3, 0, 3, 0, 3, 0, 3, 0],
];

const currentBoard = [];

const displayBoard = function(board) {
  var pageBoard = document.getElementById('checkerboard');
  pageBoard.innerHTML = '';
  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    for (var j = 0; j < row.length; j++) {
      var column = j;
      if (row % 2 === 0) {
        // first square on left is light
        if (column % 2 === 0) {
          // first 
        }
      } else {
        // first square on left is dark
      }
    }
    pageBoard.appendChild('br');
  }
};


module.exports = {
  startBoard: startBoard,
  currentBoard: currentBoard,
  displayBoard: displayBoard
};