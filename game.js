class Game {
	constructor(canvasId) {
		this.canvas = document.getElementById(canvasId);
		this.ctx = this.canvas.getContext("2d");
		this.player = new Player(this.ctx, 200, 390);
		this.bg = new Background(this.ctx);
		this.powerUps = [
			new Coke(this.ctx, 500, 350, 30),
			new Coke(this.ctx, 800, 300, 30),
			new Needle(this.ctx, 600, 300, 30),
			new Needle(this.ctx, 900, 350, 30),
			new Anphe(this.ctx, 700, 350, 30),
			new Anphe(this.ctx, 1000, 300, 30),
		];
		this.health = 0;
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
		this.powerUps.forEach(powerUp => {
			powerUp.draw()
		});
		this.drawHealth();
	}

	move() {
		this.bg.move();
		this.player.move();
		this.powerUps.forEach(powerUp => {
			powerUp.move()
		});
	}

	onKeyDown(event) {
		this.player.onKeyDown(event);
		this.bg.onKeyEvent(event);
		this.powerUps.forEach(powerUp => powerUp.onKeyEvent(event));
	}

	onKeyUp(event) {
		this.player.onKeyUp(event);
		this.bg.onKeyEvent(event);
		this.powerUps.forEach(powerUp => powerUp.onKeyEvent(event));
	}

	checkCollisionPowerUp() {
		const powerUpColliding = this.powerUps.find(powerUp => this.player.isColliding(powerUp));
		if (powerUpColliding) {
			console.log()
			switch (powerUpColliding.constructor.name) {
				case 'Coke':  
					this.health = this.health + 10;
				  break;
				case 'Anphe':	
					this.health = this.health + 5;
					break;
				case 'Needle':
					this.health = this.health + 20;
					break;
				}
			this.powerUps.splice(this.powerUps.indexOf(powerUpColliding), 1);
		}
		
	}

	clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	drawHealth() {
		this.ctx.fillStyle = '#fff';
		this.ctx.font = '24px Arial';
		this.ctx.fillText("Health: " + this.health, 10, 30);
	}




}