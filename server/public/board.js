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
  var pageBoard = document.getElementById('checkerboard');
  // clear old board
  pageBoard.innerHTML = '';

  // construct new board
  for (var i = 0; i < board.length; i++) {
    var nl = document.createElement('br');
    var row = board[i];
    for (var j = 0; j < row.length; j++) {
      var spot = board[i][j];
      if (spot === 0) {
        var lightSquare = document.createElement('div');
        lightSquare.className = 'light-square';
        pageBoard.appendChild(lightSquare);
      } else if (spot === 1) {
        var darkSquare = document.createElement('div');
        darkSquare.className = 'dark-square';
        pageBoard.appendChild(darkSquare);
      } else if (spot === 2) {
        var darkSquare = document.createElement('div');
        darkSquare.className = 'dark-square';
        var redPiece = document.createElement('div');
        redPiece.className = 'red-piece';
        darkSquare.appendChild(redPiece);
        pageBoard.appendChild(darkSquare);
      } else if (spot === 3) {
        var darkSquare = document.createElement('div');
        darkSquare.className = 'dark-square';
        var blackPiece = document.createElement('div');
        blackPiece.className = 'black-piece';
        darkSquare.appendChild(blackPiece);
        pageBoard.appendChild(darkSquare);
      }
    }
    pageBoard.appendChild(nl);
  }

  document.addEventListener('click', function(e) {
    if (e.target && e.target.className === 'dark-square') {
      console.log('clicking on, ', e.target);
    }
  });
};