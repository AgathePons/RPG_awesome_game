const app = {
  nbOfRows: 4,
  nbOfCells: 6,
  board: null,// definit à null au cas ou le script charge avant le html (script dans le head par ex), on lui donne sa vraie valeur dans init(), car init() est lancée une fois le html chargé via 'DOMContentLoaded'
  player: {
    positionX: 0,
    positionY: 0,
    direction: 'right',
  },
  targetCell: {
    positionX: 5,
    positionY: 3,
  },
  
  init: () => {
    app.board = document.getElementById('board');
    app.drawBoard(app.nbOfRows, app.nbOfCells);
    // event on key up
    document.addEventListener('keyup', function(e) {
      if (e.key === 'ArrowUp') {
        app.moveForward();
      } else if (e.key === 'ArrowLeft') {
        app.turnLeft();
      } else if (e.key === 'ArrowRight') {
        app.turnRight();
      }
    });
  },

  /**
   * function to build the board
   * @param {number} nbOfRows 
   * @param {number} nbOfCells 
   */
  drawBoard: (nbOfRows, nbOfCells) => {
    // build rows
    for (let iRows = 0; iRows < nbOfRows; iRows++) {
      const row = document.createElement('div');
      row.classList.add('row');
      // build cells
      for (let iCells = 0; iCells < nbOfCells; iCells++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = `x-${iCells}-y-${iRows}`;

        // check cells coordinates to position targetCell and player div
        if (cell.id === `x-${app.targetCell.positionX}-y-${app.targetCell.positionY}`) {
          cell.classList.add('targetCell');
        } else if (cell.id === `x-${app.player.positionX}-y-${app.player.positionY}`) {
          const playerDiv = document.createElement('div');
          playerDiv.classList.add('player');
          playerDiv.classList.add(app.player.direction);
          cell.appendChild(playerDiv);
        }

        // put cell in row
        row.appendChild(cell);
      }
      // put row in board in DOM
      app.board.appendChild(row);
    }
  },
  clearBoard: () => {
    app.board.innerHTML = '';
  },
  redrawBoard: () => {
    app.clearBoard();
    app.drawBoard(app.nbOfRows, app.nbOfCells);
  },
  turnLeft: () => {
    console.log(app.player.direction);
    if (app.player.direction === 'right') {
      app.player.direction = 'up';
      console.log(app.player.direction);
    } else if (app.player.direction === 'down') {
      app.player.direction = 'right';
      console.log(app.player.direction);
    } else if (app.player.direction === 'left') {
      app.player.direction = 'down';
      console.log(app.player.direction);
    } else if (app.player.direction === 'up') {
      app.player.direction = 'left';
      console.log(app.player.direction);
    }
    app.redrawBoard();
  },
  turnRight: () => {
    alert('Dear user, this feature is not available yet, please, use the left arrow three times instead.');
  },
  moveForward: () => {
    if ((app.player.direction === 'right') && (app.player.positionX < app.nbOfCells - 1)) {
      app.player.positionX++;
      console.log(app.player.positionX);
    } else if ((app.player.direction === 'left') && (app.player.positionX > 0)) {
      app.player.positionX--;
      console.log(app.player.positionX);
    } else if ((app.player.direction === 'up') && (app.player.positionY > 0)) {
      app.player.positionY--;
      console.log(app.player.positionY);
    } else if ((app.player.direction === 'down') && (app.player.positionY < app.nbOfRows - 1)) {
      app.player.positionY++;
      console.log(app.player.positionY);
    }
    app.redrawBoard();
  },
};

document.addEventListener('DOMContentLoaded', app.init);