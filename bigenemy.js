class Bigenemy {
	constructor(ctx, x, y, bg) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.width = 60;
		this.height = 80;
		this.horizontalFrames = 2;
		this.verticalFrames = 8;
		this.xFrame = 0
		this.yFrame = 0
        this.prevX = x;

		this.speed = -4;
		this.bg = bg;
		this.img = new Image();
		this.img.src = "images/big-enemy.png";
		this.isReady = false;
		this.img.onload = () => {
			this.isReady = true;
		};

		this.isMoving = true;
		this.direction = {
            right: false,
			left: true,
		};

        this.isColliding = false;
        this.isPunching = false;
		this.health = 40;
        this.damage = 10;
		this.death = false;

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
				this.height,
                this.direction.right,
			);
			this.tick++;
		}
	}




	move() {
		if(this.isReady){
            this.x += this.speed + this.bg.speed;
        };

        if (this.x + this.width/2 <= 0) {
			this.direction.left = false;
            this.direction.right = true;
		}
        if (this.x >= this.ctx.canvas.width - this.width/2) {
			this.direction.left = true;
            this.direction.right = false;
		}

        

       

		if (this.isMoving) {
			if (this.direction.left){
                this.yFrame = 0};
                
               
            if (this.direction.right){
                this.yFrame = 4;
                this.x += -2 * this.speed;
            };

			if (this.tick % 15 === 0) {
     		   this.xFrame += 1;

       		if (this.xFrame > 1) {
         		this.xFrame = 0;
        	}
      	  }
		}
        if (!this.isMoving && this.isColliding && this.isPunching){
            if (this.tick % 30 === 0) {
     		   this.xFrame += 1;

       		if (this.xFrame > 1) {
         		this.xFrame = 0;
        	}
      	  }

        }
	}
}