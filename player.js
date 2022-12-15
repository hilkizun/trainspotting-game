class Player {
	constructor(ctx, x, y) {
		this.ctx = ctx;
		this.x = x;
		this.prevX = x;
		this.y = y;
		this.prevY = y;
		this.width = 50;
		this.height = 70;
		this.horizontalFrames = 4;
		this.verticalFrames = 9;
		this.xFrame = 0;
		this.yFrame = 1;
		this.timeOutPunch = null;
		

		this.speed = 0;
		this.gravity = 0.35;
		this.img = new Image();
		this.img.src = "images/player-sprite-test.png";
		this.isReady = false;
		this.img.onload = () => {
			this.isReady = true;
		};

		this.isMoving = false;
		this.isJumping = false;
		this.isPunch = false;
		this.isPlatform = false;
		this.direction = {
			left: false,
			right: true,
		};
		this.isDrunk = false;
		this.isDeath = false;

		this.tick = 0;
	}


	/////// CREAR UN ESTADO FALLING QUE IMPIDA

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

	onKeyDown(event) {
		if (event.keyCode === 38 && !this.isJumping) {
			this.isJumping = true;
			this.isPlatform = false;
			this.speed = -10;
		}
		if (event.keyCode === 39) {
			this.direction.left = false;
			this.isMoving = true;
			this.direction.right = true;
		}
		if (event.keyCode === 37) {
			this.direction.right = false;
			this.isMoving = true;
			this.direction.left = true;
		}
		if (event.keyCode === 32) {
			this.isPunch = true;
			this.direction.right = this.direction.right;
			this.direction.left = this.direction.left;
		}

	}

	onKeyUp(event) {
		if (event.keyCode === 37 || event.keyCode === 39) {
			this.isMoving = false;
		}
	
	}

	move() {
		this.speed += this.gravity;
		this.prevY = this.y;
		this.y += this.speed;

		if (!this.isPunch){
			if(this.isMoving && !this.isJumping){
				if (this.direction.right) {
					this.yFrame = 1;
		
					if (this.tick % 15 === 0) {
						this.xFrame += 1;
		
					   if (this.xFrame > 1) {
						 this.xFrame = 0;
					}
					}
				}
				
				 if (this.direction.left) {
					this.yFrame = 3;
		
					if (this.tick % 15 === 0) {
						this.xFrame += 1;
		
					if (this.xFrame > 1) {
						  this.xFrame = 0;
					}
				  }
				}

			}
			
	
	
	
			if (!this.isMoving && this.direction.right) {
				this.yFrame = 1;
				this.xFrame = 0;
			   }
			if (!this.isMoving && this.direction.left) {
			   this.yFrame = 3;
			   this.xFrame = 0;
			}
	
			if (this.isJumping && this.direction.right) {
				 this.yFrame = 0;
				 this.xFrame = 0;
			}
			if (this.isJumping && this.direction.left) {
				this.yFrame = 2;
				this.xFrame = 0;
			}
		
	}
		if (this.isPlatform){
			this.isJumping = false;
			this.speed = 8;
		}

		if (this.y > this.ctx.canvas.height - 50 - this.height) {
			this.y = this.ctx.canvas.height - 50 - this.height;
			this.isJumping = false;
			this.isPlatform = false;
		}

		if (this.isPunch && !this.isJumping && !this.isMoving) {
			if (this.direction.right){
				this.yFrame = 4;
			}
			if (this.direction.left){
				this.yFrame = 5;
			}

			if (this.tick % 10 === 0) {
				this.xFrame += 1;
				if (this.xFrame === 2) {
					this.horizontalFrames = 2;
					this.width = 100;
					this.xFrame = 1;
				}
			}

		  if (!this.timeOutPunch) {
			this.timeOutPunch = setTimeout(() => {
				this.isPunch = false;
				this.horizontalFrames = 4;
				this.width = 50; 
				this.xFrame = 0;
				this.yFrame = 1;
				
				clearTimeout(this.timeOutPunch)
				this.timeOutPunch = null
			  }, 450)
		  }		
		}

		if (this.isDeath){
			this.yFrame = 8;
        	this.horizontalFrames = 2;
			this.width = 100;
			this.isMoving = true;
			
		}

		if (this.isDrunk){
			
		}


	}


	

	isColliding(obj) {
		return (
			this.x < obj.x + obj.width &&
			this.x + this.width > obj.x &&
			this.y < obj.y + obj.height &&
			this.y + this.height > obj.y
		)
	}
}