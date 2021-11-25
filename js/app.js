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

  /**
   * function to build the board
   * @param {number} nbOfRows 
   * @param {number} nbOfCells 
   */
  drawBoard: function (nbOfRows, nbOfCells) {
    for (var iRows = 0; iRows < nbOfRows; iRows++) {
      var row = document.createElement('div');
      row.classList.add('row');

      for (var iCells = 0; iCells < nbOfCells; iCells++) {
        var cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = `x-${iCells}-y-${iRows}`;

        // check cells coordinates to position targetCell and player div
        if (cell.id === `x-${app.targetCell.positionX}-y-${app.targetCell.positionY}`) {
          cell.classList.add('targetCell');
        } else if (cell.id === `x-${app.player.positionX}-y-${app.player.positionY}`) {
          var playerDiv = document.createElement('div');
          playerDiv.classList.add('player');
          cell.appendChild(playerDiv);
        }

        row.appendChild(cell);
      }

      app.board.appendChild(row);
    }
  },
};

document.addEventListener('DOMContentLoaded', app.init);