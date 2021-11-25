var app = {
  player: {
    positionX: 0,
    positionY: 0,
    direction: 'right',
  },
  targetCell: {
    positionX: 5,
    positionY: 3,
  },
  board: document.getElementById('board'),

  init: function () {
    app.drawBoard(4, 6);
  },

  drawBoard: function (nbOfRows, nbOfCells) {
    console.log('tadaaa');
    for (var iRows = 0; iRows < nbOfRows; iRows++) {
      var row = document.createElement('div');
      row.classList.add('row');

      for (var iCells = 0; iCells < nbOfCells; iCells++) {
        console.log(iCells);
        var cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
      }

      app.board.appendChild(row);
    }
  }
};

document.addEventListener('DOMContentLoaded', app.init);