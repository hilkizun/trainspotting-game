class Game {
	constructor(canvasId) {
		this.canvas = document.getElementById(canvasId);
		this.ctx = this.canvas.getContext("2d");
		this.player = new Player(this.ctx, 200, 390);
		this.bg = new Background(this.ctx);
		this.cokes = [
			new Coke(this.ctx, 500, 300, 30),
			new Coke(this.ctx, 600, 300, 30),
			new Coke(this.ctx, 700, 300, 30),
		];
	}

	start() {
		this.intervalId = setInterval(() => {
			this.draw();
			this.move();
		}, 1000 / 60);
	}

	draw() {
		this.bg.draw();
		this.player.draw();
		this.cokes.forEach(coke => {
			coke.draw()
		})
	}

	move() {
		this.bg.move();
		this.player.move();
		this.cokes.forEach(coke => {
			coke.move()
		});
	}

	clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	onKeyDown(event) {
		this.player.onKeyDown(event);
		this.bg.onKeyEvent(event);
		this.cokes.forEach(coke => coke.onKeyEvent(event));

		if (event.keyCode === 32) {
			event.preventDefault();
		}
	}

	onKeyUp(event) {
		this.player.onKeyUp(event);
		this.bg.onKeyEvent(event);
		this.cokes.forEach(coke => coke.onKeyEvent(event));
	}


}