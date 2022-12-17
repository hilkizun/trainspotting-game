class Bottle {
	constructor(ctx, x, y) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.width = 32;
		this.height = 32;
		this.img = new Image();
		this.img.src = "images/bottle.png";
		this.isReady = false;
		this.img.onload = () => {
			this.isReady = true;
		};


		this.speed = 0;
		this.directions = {
			left: false,
			right: false,
		};
	}

	draw() {
		if (this.isReady) {
			this.ctx.drawImage(
				this.img,
                this.x,
                this.y,
				this.width,
				this.height,
			);
		}
	}

	move() {
		this.x += this.speed;

		if (this.directions.left) {
			this.speed = 4;
		} else if (this.directions.right) {
			this.speed = -4;
		} else {
			this.speed = 0;
		}

	}

	onKeyEvent(event) {
		const isKeyDown = event.type === 'keydown';

		if (event.keyCode === 37) {
			this.directions.left = isKeyDown;
		} else if (event.keyCode === 39) {
			this.directions.right = isKeyDown;
		}
	}
}