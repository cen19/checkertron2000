// legend
  // 0 light square
  // 1 dark square
  // 2 dark square with red piece on it
  // 3 dark square with black piece on it
let something = function() {
  alert('hi');
};

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

  var blackPiece = document.createElement('div');
  blackPiece.className = 'black-piece';

  var nl = document.createElement('br');
  
  
  var pageBoard = document.getElementById('checkerboard');
  // clear old board
  pageBoard.innerHTML = '';

  // construct new board
  for (var i = 0; i < board.length; i++) {
    console.log('rows, ', i);
    var row = board[i];
    console.log('row data, ', row);
    for (var j = 0; j < row.length; j++) {
      var spot = board[i][j];
      if (spot === 0) {
        var lightSquare = document.createElement('div');
        lightSquare.className = 'light-square';
        console.log('appending light square!');
        pageBoard.appendChild(lightSquare);
      } else if (spot === 1) {
        var darkSquare = document.createElement('div');
        darkSquare.className = 'dark-square';
        console.log('appending dark square!');
        pageBoard.appendChild(darkSquare);
      } else if (spot === 2) {
        var darkSquare = document.createElement('div');
        darkSquare.className = 'dark-square';
        var redPiece = document.createElement('div');
        redPiece.className = 'red-piece';
        console.log('appending dark square w/ red!');
        darkSquare.appendChild(redPiece);
        pageBoard.appendChild(darkSquare);
      } else if (spot === 3) {
        var darkSquare = document.createElement('div');
        darkSquare.className = 'dark-square';
        var blackPiece = document.createElement('div');
        blackPiece.className = 'black-piece';
        console.log('appending dark square w/ black!');
        darkSquare.appendChild(blackPiece);
        pageBoard.appendChild(darkSquare);
      }
    }
    pageBoard.appendChild(nl);
  }
};