class Player {
	constructor(ctx, x, y) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.width = 50;
		this.height = 70;
		this.horizontalFrames = 2;
		this.verticalFrames = 2;
		this.xFrame = 0
		this.yFrame = 1

		this.speed = 0;
		this.gravity = 0.4;
		this.img = new Image();
		this.img.src = "images/player-sprite.png";
		this.isReady = false;
		this.img.onload = () => {
			this.isReady = true;
		};

		this.isMoving = false;
		this.isJumping = false;

		this.tick = 0;
	}

	draw() {
		if (this.isReady) {
			this.ctx.drawImage(
				this.img,
				this.img.width / this.horizontalFrames * this.xFrame,
				this.img.height / this.verticalFrames * this.yFrame,
				this.img.width / this.horizontalFrames,
				this.img.height / this.verticalFrames,
				this.x,
				this.y,
				this.width,
				this.height
			);
			this.tick++;
		}
	}

	move() {
		this.speed += this.gravity;
		this.y += this.speed;

		if (this.isMoving && !this.isJumping) {
			this.yFrame = 1;

			if (this.tick % 10 === 0) {
        this.xFrame += 1;

        if (this.xFrame > 1) {
          this.xFrame = 0;
        }
      }
		}

		if (!this.isMoving) {
      this.yFrame = 1;
      this.xFrame = 0;
    }

		if (this.isJumping) {
      this.yFrame = 0;
      this.xFrame = 0;
		}

		if (this.y > this.ctx.canvas.height - 50 - this.height) {
			this.y = this.ctx.canvas.height - 50 - this.height;
			this.isJumping = false;
		}
	}

	onKeyDown(event) {
		if (event.keyCode === 38 && !this.isJumping) {
			this.isJumping = true;
			this.speed = -10;
		}
		if (event.keyCode === 37 || event.keyCode === 39) {
			this.isMoving = true;
		}
	}

	onKeyUp(event) {
		if (event.keyCode === 37 || event.keyCode === 39) {
			this.isMoving = false;
		}
	}

	isColliding(obj) {
		return this.x < obj.x + obj.width
		 && this.x + this.width > obj.x
		 && this.y < obj.y + obj.width
		 && this.y + this.height > obj.y;
	}

}