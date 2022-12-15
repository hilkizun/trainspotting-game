class Party {
	constructor(ctx, x, y, bg) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.width = 190;
		this.height = 67;
        this.horizontalFrames = 2;
		this.verticalFrames = 2;
        this.xFrame = 0;
        this.yFrame = 0;
		this.img = new Image();
		this.img.src = "images/party.png";
		this.isReady = false;
		this.img.onload = () => {
			this.isReady = true;
		};

		this.speed = 0;
		this.directions = {
			left: false,
			right: false,
		};
        this.tick = 0 ;
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
				this.height,
			);
			this.tick++;
		}
	}

	move() {
		this.x += this.speed;

		if (this.directions.left) {
			this.speed = 4
		} else if (this.directions.right) {
			this.speed = -4
		} else {
			this.speed = 0;
		}
        if (this.tick % 20 === 0) {
            this.xFrame += 1;
            if (this.xFrame > 1){
                this.xFrame = 0;
            }
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