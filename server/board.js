// legend
  // 0 light square
  // 1 light square with piece on it
  // 2 dark square
  // 3 dark square with piece on it


const startBoard = [
    [0, 3, 0, 3, 0, 3, 0, 3],
    [3, 0, 3, 0, 3, 0, 3, 0],
    [0, 3, 0, 3, 0, 3, 0, 3],
    [3, 0, 3, 0, 3, 0, 3, 0],
    [0, 3, 0, 3, 0, 3, 0, 3],
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