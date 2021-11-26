const app = {
  nbOfRows: 6,
  nbOfCells: 6,
  board: null, // definit à null au cas ou le script charge avant le html (script dans le head par ex), on lui donne sa vraie valeur dans init(), car init() est lancée une fois le html chargé via 'DOMContentLoaded'
  player: {
    positionX: 0,
    positionY: 0,
    direction: 'right',
  },
  targetCell: {
    positionX: 5,
    positionY: 3,
  },
  gameOver: false,

  init: () => {
    app.board = document.getElementById('board');
    app.drawBoard(app.nbOfRows, app.nbOfCells);
    // event on key up
    document.addEventListener('keyup', function (e) {
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

        // compare iRows/iCells to positionX / positionY of targetCell and player
        if ((iRows === app.player.positionY) && (iCells === app.player.positionX)) {
          const playerDiv = document.createElement('div');
          playerDiv.classList.add('player');
          playerDiv.classList.add(app.player.direction);
          cell.appendChild(playerDiv);
        } else if ((iRows === app.targetCell.positionY) && (iCells === app.targetCell.positionX)) {
          cell.classList.add('targetCell');
        }

        // put cell in row
        row.appendChild(cell);
      }
      // put row in board in DOM
      app.board.appendChild(row);
    }
  },
  clearBoard: () => app.board.innerHTML = '',
  redrawBoard: () => {
    app.clearBoard();
    app.drawBoard(app.nbOfRows, app.nbOfCells);
  },
  turnLeft: () => {
    console.log(app.player.direction);
    switch (app.player.direction) {
    case 'right':
      app.player.direction = 'up';
      break;
    case 'down':
      app.player.direction = 'right';
      break;
    case 'left':
      app.player.direction = 'down';
      break;
    case 'up':
      app.player.direction = 'left';
      break;
    }
    app.redrawBoard();
  },
  turnRight: () => {
    console.log(app.player.direction);
    switch (app.player.direction) {
    case 'right':
      app.player.direction = 'down';
      break;
    case 'down':
      app.player.direction = 'left';
      break;
    case 'left':
      app.player.direction = 'up';
      break;
    case 'up':
      app.player.direction = 'right';
      break;
    }
    app.redrawBoard();
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
  isGameOver: () => {
    
  }
};

document.addEventListener('DOMContentLoaded', app.init);