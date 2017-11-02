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
  console.log('working on some stufF!!!');
  // divs for squares
  var lightSquare = document.createElement('div');
  lightSquare.className = 'light-square';
  var darkSquare = document.createElement('div');
  darkSqaure.className = 'dark-square';
  var redPiece = document.createElement('div');
  redPiece.className = 'red-piece';
  var blackPiece = document.createElement('div');
  blackPiece.className = 'black-piece';
  
  
  var pageBoard = document.getElementById('checkerboard');
  pageBoard.innerHTML = '';
  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    for (var j = 0; j < row.length; j++) {
      var spot = [row, j];
      if (spot === 0) {
        pageBoard.appendChild(lightSquare);
      } else if (spot === 1) {
        pageBoard.appendChild(darkSquare);
      } else if (spot === 2) {
        pageBoard.appendChild(darkSquareRedPiece);
      } else if (spot === 3) {
        pageBoard.appendChild(darkSquareBlackPiece);
      }
    }
    pageBoard.appendChild('br');
  }
};