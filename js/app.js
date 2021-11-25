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
  init: function () {
    console.log('init !');
  },
  
};

document.addEventListener('DOMContentLoaded', app.init);