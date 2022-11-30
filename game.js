class Game {
	constructor(canvasId) {
		this.canvas = document.getElementById(canvasId);
		this.ctx = this.canvas.getContext("2d");
		this.player = new Player(this.ctx, 200, 390);
		this.bg = new Background(this.ctx);
		this.cokes = [
			new Coke(this.ctx, 500, 350, 30),
			new Coke(this.ctx, 800, 300, 30),
		];
		this.needles = [
			new Needle(this.ctx, 600, 300, 30),
			new Needle(this.ctx, 900, 350, 30),
		];
		this.anphes = [
			new Anphe(this.ctx, 700, 350, 30),
			new Anphe(this.ctx, 1000, 300, 30),
		];
	}

	start() {
		this.intervalId = setInterval(() => {
			this.clear()
			this.draw();
			this.move();
			this.checkCollisionPowerUp();
		}, 1000 / 60);
	}

	draw() {
		this.bg.draw();
		this.player.draw();
		this.cokes.forEach(coke => {
			coke.draw()
		});
		this.needles.forEach(needle => {
			needle.draw()
		});
		this.anphes.forEach(anphe => {
			anphe.draw()
		});
	}

	move() {
		this.bg.move();
		this.player.move();
		this.cokes.forEach(coke => {
			coke.move()
		});
		this.needles.forEach(needle => {
			needle.move()
		})
		this.anphes.forEach(anphe => {
			anphe.move()
		})
	}



	onKeyDown(event) {
		this.player.onKeyDown(event);
		this.bg.onKeyEvent(event);
		this.cokes.forEach(coke => coke.onKeyEvent(event));
		this.needles.forEach(needle => needle.onKeyEvent(event));
		this.anphes.forEach(anphe => anphe.onKeyEvent(event));

	}

	onKeyUp(event) {
		this.player.onKeyUp(event);
		this.bg.onKeyEvent(event);
		this.cokes.forEach(coke => coke.onKeyEvent(event));
		this.needles.forEach(needle => needle.onKeyEvent(event));
		this.anphes.forEach(anphe => anphe.onKeyEvent(event));
	}

	checkCollisionPowerUp() {
		const cokeColliding = this.cokes.find(coke => this.player.isColliding(coke));
		if (cokeColliding) {
			this.cokes.splice(this.cokes.indexOf(cokeColliding), 1);
		}

		const needleColliding = this.needles.find(needle => this.player.isColliding(needle));
		if (needleColliding) {
			this.needles.splice(this.needles.indexOf(needleColliding), 1);
		}

		const anpheColliding = this.anphes.find(anphe => this.player.isColliding(anphe));
		if (anpheColliding) {
			this.anphes.splice(this.anphes.indexOf(anpheColliding), 1);
		}
	}

	clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}




}