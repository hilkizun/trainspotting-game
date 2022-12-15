const game = new Game('canvas-game');
let startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', () => {
	game.start();
	startBtn.remove();
});

// function setPauseBtn() {
// 	startBtn.innerHTML = 'Pause';
// 	startBtn.setAttribute('class', 'pause-btn');
// 	startBtn.setAttribute('id', 'pause-btn');
//   }

document.addEventListener('keydown', function(event) {
	game.onKeyDown(event);
});

document.addEventListener('keyup', function(event) {
	game.onKeyUp(event);
});
