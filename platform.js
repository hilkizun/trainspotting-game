class Platform {
	constructor(ctx, x, y, width, height) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.speed = 0;
        this.directions = {
			left: false,
			right: false,
		};
	}

    draw(){
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
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