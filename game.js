class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.player = new Player(this.ctx, 200, 390);
        this.bg = new Background(this.ctx);
        this.powerUps = [
            new Coke(this.ctx, 39, 234, 30),
            new Coke(this.ctx, 644, 149, 30),
			new Coke(this.ctx, 860, 75, 30),
            new Coke(this.ctx, 644, 149, 30),
            new Needle(this.ctx, 190, 234, 30),
            new Needle(this.ctx, 578, 311, 30),
			new Needle(this.ctx, 743, 149, 30),
            new Needle(this.ctx, 578, 311, 30),
            new Anphe(this.ctx, 441, 309, 30),
            new Anphe(this.ctx, 1000, 270, 30),
			new Anphe(this.ctx, 441, 309, 30),
            new Anphe(this.ctx, 1000, 270, 30),
        ];
        this.enemys = [
            //		new Enemy(this.ctx, 500, 405),
            new Enemy(this.ctx, 2000, 405, this.bg),
            new Bigenemy(this.ctx, 1000, 395, this.bg),
            new Enemy(this.ctx, 3000, 405, this.bg),
            new Bigenemy(this.ctx, 4000, 395, this.bg),
            new Enemy(this.ctx, 5000, 405, this.bg),
            new Bigenemy(this.ctx, 6000, 395, this.bg),
            new Enemy(this.ctx, 6000, 405, this.bg),
            new Enemy(this.ctx, 6000, 405, this.bg),
        ];
        this.platforms = [
			new Platform(this.ctx, 25, 280, 211, 0),
			new Platform(this.ctx, 55, 372, 150, 0),
			new Platform(this.ctx, 402, 360, 264, 0),
			new Platform(this.ctx, 611, 197, 195, 0),
			new Platform(this.ctx, 935, 197, 195, 0),
			new Platform(this.ctx, 1271, 196, 195, 0),
			new Platform(this.ctx, 1575, 279, 211, 0),
			new Platform(this.ctx, 1606, 372, 150, 0),
			new Platform(this.ctx, 2058, 196, 195, 0),
			new Platform(this.ctx, 2489, 226, 195, 0),
			new Platform(this.ctx, 2550, 356, 74, 0),		
		];
        this.health = 0;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear();
            this.draw();
            this.move();
            this.checkCollision();
        }, 1000 / 60);
    }

    draw() {
        this.bg.draw();
        this.player.draw();
        this.enemys.forEach((enemy) => {
            enemy.draw();
        });
        this.powerUps.forEach((powerUp) => {
            powerUp.draw();
        });
        this.platforms.forEach((platform) => {
            platform.draw();
        });

        this.drawHealth();
    }

    move() {
        this.bg.move();
        this.player.move();
        this.enemys.forEach((enemy) => {
            enemy.move();
        });
        this.powerUps.forEach((powerUp) => {
            powerUp.move();
        });
        this.platforms.forEach((platform) => {
            platform.move();
        });
    }

    onKeyDown(event) {
        this.player.onKeyDown(event);
        this.bg.onKeyEvent(event);
        this.powerUps.forEach((powerUp) => powerUp.onKeyEvent(event));
        this.platforms.forEach((platform) => platform.onKeyEvent(event));
    }

    onKeyUp(event) {
        this.player.onKeyUp(event);
        this.bg.onKeyEvent(event);
        this.powerUps.forEach((powerUp) => powerUp.onKeyEvent(event));
        this.platforms.forEach((platform) => platform.onKeyEvent(event));
    }



    checkCollision() {
        const powerUpColliding = this.powerUps.find((powerUp) =>
            this.player.isColliding(powerUp)
        );

        if (powerUpColliding) {
            switch (powerUpColliding.constructor.name) {
                case "Coke":
                    this.health = this.health + 10;
                    break;
                case "Anphe":
                    this.health = this.health + 5;
                    break;
                case "Needle":
                    this.health = this.health + 20;
                    break;
            }
            this.powerUps.splice(this.powerUps.indexOf(powerUpColliding), 1);
        }
        const enemyColliding = this.enemys.find((enemy) =>
            this.player.isColliding(enemy)
        );
        if (enemyColliding && !enemyColliding.isColliding) {
            enemyColliding.isMoving = false;
            enemyColliding.isColliding = true;
            enemyColliding.speed = 0;
            enemyColliding.xFrame = 0;
            setTimeout(() => {
                if (enemyColliding.direction.right){
                    enemyColliding.yFrame = 5;}
                    else {enemyColliding.yFrame = 1;}
                enemyColliding.isPunching = true;
            }, 800);
            setTimeout(() => {
                enemyColliding.isColliding = false;
                enemyColliding.isMoving = true;
                if (enemyColliding.direction.right){
                    enemyColliding.yFrame = 4;}
                    else {enemyColliding.yFrame = 0;}
                enemyColliding.yFrame = 0;
                enemyColliding.isPunching = false;
                enemyColliding.speed = -2;
            }, 2000);
        }
/// DAÑO AL PLAYER
        if (enemyColliding && enemyColliding.isColliding && (enemyColliding.yFrame === 1 ||  enemyColliding.yFrame === 5 ) && enemyColliding.xFrame === 1) {
            this.health = this.health - 1/4;
            if (this.player.direction.right){
                this.player.yFrame = 6;}
                else {this.player.yFrame = 7}
            
            console.log('daño player')
        }
/// DAÑO AL ENEMIGO
        if (enemyColliding && enemyColliding.isColliding && this.player.isPunch && this.player.xFrame >= 1) {
            enemyColliding.health = enemyColliding.health - 1/2;
            enemyColliding.isPunching = false;
            enemyColliding.isMoving = false;
            if (enemyColliding.direction.right){
                enemyColliding.yFrame = 6;}
                else {enemyColliding.yFrame = 2;}
            console.log('daño enemigo')
            console.log(enemyColliding.health)
            if (enemyColliding.health <= 0){
                enemyColliding.timeDeath = setTimeout(() => {
                    enemyColliding.isPunching = false;
                    if (enemyColliding.tick % 5 === 0){
                        enemyColliding.xFrame +=1;
                        if (enemyColliding.direction.left){
                            enemyColliding.yFrame = 2;
                        }
                        else {enemyColliding.yFrame = 6;}
                    };
                   
////// FALLO NO CONSIGO QUE PARAPEDEE AL MORIR                    
                    clearTimeout(enemyColliding.timeDeath)
                    enemyColliding.timeDeath = null
                    
                  }, 4000)

                  this.enemys.splice(this.enemys.indexOf(enemyColliding), 1);
            };
        }

        

		this.platforms.find((plat) => {
			if (
				this.player.x < plat.x + plat.width &&
				this.player.x + this.player.width > plat.x &&
				this.player.y < plat.y + plat.height &&
				this.player.y + this.player.height > plat.y &&
				this.player.prevY + this.player.height <= plat.y
			) {
				this.player.vy = 0;
				this.player.y = this.player.prevY;
				this.player.isPlatform = true;
			}
		});
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawHealth() {
        this.ctx.fillStyle = "#fff";
        this.ctx.font = "24px Arial";
        this.ctx.fillText("Health: " + this.health, 10, 30);
    }
}
