class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.player = new Player(this.ctx, 200, 390);
        this.bg = new Background(this.ctx);
        this.partys = [
            new Party(this.ctx, 5162, 410, this.bg),
            new Party(this.ctx, 10562, 410, this.bg),
            new Party(this.ctx, 15962, 410, this.bg),
            new Party(this.ctx, 21562, 410, this.bg),
            new Party(this.ctx, 26762, 410, this.bg),
        ];
        this.powerUps = [


            new Cbd(this.ctx, 39, 234, 30),
            new Cbd(this.ctx, 644, 149, 30),
            new Cbd(this.ctx, 860, 75, 30),
            new Cbd(this.ctx, 644, 149, 30),
            new Bottle(this.ctx, 190, 234, 30),
            new Bottle(this.ctx, 578, 311, 30),
            new Bottle(this.ctx, 743, 149, 30),
            new Bottle(this.ctx, 578, 311, 30),
            new Anphe(this.ctx, 441, 309, 30),
            new Anphe(this.ctx, 1000, 270, 30),
            new Anphe(this.ctx, 441, 309, 30),
            new Anphe(this.ctx, 1000, 270, 30),

            new Cbd(this.ctx, 1200, 234, 30),
            new Cbd(this.ctx, 1300, 149, 30),
            new Cbd(this.ctx, 1400, 75, 30),
            new Cbd(this.ctx, 1500, 149, 30),
            new Bottle(this.ctx, 1600, 234, 30),
            new Bottle(this.ctx, 1700, 311, 30),
            new Bottle(this.ctx, 1800, 149, 30),
            new Bottle(this.ctx, 1900, 311, 30),
            new Anphe(this.ctx, 2000, 309, 30),
            new Anphe(this.ctx, 2100, 270, 30),
            new Anphe(this.ctx, 2200, 309, 30),
            new Anphe(this.ctx, 2300, 270, 30),
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
            new Enemy(this.ctx, 7000, 405, this.bg),
        ];
        this.platforms = [
            new Platform(this.ctx, -5375, 280, 211, 0),
            new Platform(this.ctx, -5345, 372, 150, 0),
            new Platform(this.ctx, -4998, 360, 264, 0),
            new Platform(this.ctx, -4789, 197, 195, 0),
            new Platform(this.ctx, -4465, 197, 195, 0),
            new Platform(this.ctx, -4129, 196, 195, 0),
            new Platform(this.ctx, -3825, 279, 211, 0),
            new Platform(this.ctx, -3794, 372, 150, 0),
            new Platform(this.ctx, -3342, 196, 195, 0),
            new Platform(this.ctx, -2806, 281, 195, 0),
            new Platform(this.ctx, -2780, 373, 145, 0),
            new Platform(this.ctx, -2470, 360, 250, 0),
            new Platform(this.ctx, -2083, 198, 180, 0),
            new Platform(this.ctx, -1783, 282, 200, 0),
            new Platform(this.ctx, -1755, 373, 146, 0),
            new Platform(this.ctx, -1460, 196, 180, 0),
            new Platform(this.ctx, -1121, 198, 180, 0),
            new Platform(this.ctx, -636, 198, 180, 0),
            new Platform(this.ctx, -238, 230, 185, 0),
            new Platform(this.ctx, -180, 370, 83, 0),

            new Platform(this.ctx, 25, 280, 211, 0),
            new Platform(this.ctx, 55, 372, 150, 0),
            new Platform(this.ctx, 402, 360, 264, 0),
            new Platform(this.ctx, 611, 197, 195, 0),
            new Platform(this.ctx, 935, 197, 195, 0),
            new Platform(this.ctx, 1271, 196, 195, 0),
            new Platform(this.ctx, 1575, 279, 211, 0),
            new Platform(this.ctx, 1606, 372, 150, 0),
            new Platform(this.ctx, 2058, 196, 195, 0),
            new Platform(this.ctx, 2594, 281, 195, 0),
            new Platform(this.ctx, 2620, 373, 145, 0),
            new Platform(this.ctx, 2930, 360, 250, 0),
            new Platform(this.ctx, 3317, 198, 180, 0),
            new Platform(this.ctx, 3617, 282, 200, 0),
            new Platform(this.ctx, 3645, 373, 146, 0),
            new Platform(this.ctx, 3940, 196, 180, 0),
            new Platform(this.ctx, 4279, 198, 180, 0),
            new Platform(this.ctx, 4764, 198, 180, 0),
            new Platform(this.ctx, 5162, 230, 185, 0),
            new Platform(this.ctx, 5216, 370, 83, 0),

            new Platform(this.ctx, 5425, 280, 211, 0),
            new Platform(this.ctx, 5455, 372, 150, 0),
            new Platform(this.ctx, 5802, 360, 264, 0),
            new Platform(this.ctx, 6011, 197, 195, 0),
            new Platform(this.ctx, 6335, 197, 195, 0),
            new Platform(this.ctx, 6671, 196, 195, 0),
            new Platform(this.ctx, 6975, 279, 211, 0),
            new Platform(this.ctx, 7006, 372, 150, 0),
            new Platform(this.ctx, 7458, 196, 195, 0),
            new Platform(this.ctx, 7994, 281, 195, 0),
            new Platform(this.ctx, 8020, 373, 145, 0),
            new Platform(this.ctx, 8330, 360, 250, 0),
            new Platform(this.ctx, 8717, 198, 180, 0),
            new Platform(this.ctx, 9017, 282, 200, 0),
            new Platform(this.ctx, 9045, 373, 146, 0),
            new Platform(this.ctx, 9340, 196, 180, 0),
            new Platform(this.ctx, 9679, 198, 180, 0),
            new Platform(this.ctx, 10164, 198, 180, 0),
            new Platform(this.ctx, 10562, 230, 185, 0),
            new Platform(this.ctx, 10613, 370, 83, 0),

            new Platform(this.ctx, 10825, 280, 211, 0),
            new Platform(this.ctx, 10855, 372, 150, 0),
            new Platform(this.ctx, 11202, 360, 264, 0),
            new Platform(this.ctx, 11411, 197, 195, 0),
            new Platform(this.ctx, 11735, 197, 195, 0),
            new Platform(this.ctx, 12071, 196, 195, 0),
            new Platform(this.ctx, 12375, 279, 211, 0),
            new Platform(this.ctx, 12406, 372, 150, 0),
            new Platform(this.ctx, 12858, 196, 195, 0),
            new Platform(this.ctx, 13394, 281, 195, 0),
            new Platform(this.ctx, 13420, 373, 145, 0),
            new Platform(this.ctx, 13730, 360, 250, 0),
            new Platform(this.ctx, 14117, 198, 180, 0),
            new Platform(this.ctx, 14417, 282, 200, 0),
            new Platform(this.ctx, 14445, 373, 146, 0),
            new Platform(this.ctx, 14740, 196, 180, 0),
            new Platform(this.ctx, 15079, 198, 180, 0),
            new Platform(this.ctx, 15564, 198, 180, 0),
            new Platform(this.ctx, 15962, 230, 185, 0),
            new Platform(this.ctx, 16013, 370, 83, 0),

            new Platform(this.ctx, 16225, 280, 211, 0),
            new Platform(this.ctx, 16255, 372, 150, 0),
            new Platform(this.ctx, 16602, 360, 264, 0),
            new Platform(this.ctx, 16811, 197, 195, 0),
            new Platform(this.ctx, 17135, 197, 195, 0),
            new Platform(this.ctx, 17471, 196, 195, 0),
            new Platform(this.ctx, 17775, 279, 211, 0),
            new Platform(this.ctx, 17806, 372, 150, 0),
            new Platform(this.ctx, 18258, 196, 195, 0),
            new Platform(this.ctx, 18794, 281, 195, 0),
            new Platform(this.ctx, 18820, 373, 145, 0),
            new Platform(this.ctx, 19130, 360, 250, 0),
            new Platform(this.ctx, 19517, 198, 180, 0),
            new Platform(this.ctx, 19817, 282, 200, 0),
            new Platform(this.ctx, 19845, 373, 146, 0),
            new Platform(this.ctx, 20140, 196, 180, 0),
            new Platform(this.ctx, 20479, 198, 180, 0),
            new Platform(this.ctx, 20964, 198, 180, 0),
            new Platform(this.ctx, 21362, 230, 185, 0),
            new Platform(this.ctx, 21413, 370, 83, 0),
        ];
        
        this.soundBg = new Audio('./sounds/music.mp3');
        this.soundBg.volume = 0.3;
        this.soundBg.loop = true;
        this.drank = new Audio('./sounds/drank.mp3');
        this.drank.volume = 0.1;
        this.drugs = new Audio('./sounds/drugs.mp3');
        this.drugs.volume = 0.1;
        this.soundOver = new Audio ('./sounds/gameover.wav')
        this.punchSound = new Audio ('./sounds/punch.wav')
        this.punchSound.volume = 0.1;
        this.noParty = new Audio('./sounds/noparty.mp3')
        this.noParty.volume = 0.2;

        this.health = 0;
        this.maxHealth = 2000;
        this.level = 1;
    }

    start() {
        this.soundBg.play();
        this.intervalId = setInterval(() => {
            this.clear();
            this.draw();
            this.move();
            this.checkCollision();
        }, 1000 / 60);
    }

    draw() {
        this.bg.draw();
        this.partys.forEach((party) => {
            party.draw();
        });
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
        this.partys.forEach((party) => {
            party.move();
        });
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
        this.partys.forEach((party) => party.onKeyEvent(event));
        this.powerUps.forEach((powerUp) => powerUp.onKeyEvent(event));
        this.platforms.forEach((platform) => platform.onKeyEvent(event));
    }

    onKeyUp(event) {
        this.player.onKeyUp(event);
        this.bg.onKeyEvent(event);
        this.partys.forEach((party) => party.onKeyEvent(event));
        this.powerUps.forEach((powerUp) => powerUp.onKeyEvent(event));
        this.platforms.forEach((platform) => platform.onKeyEvent(event));
    }

    checkCollision() {
        const partyColliding = this.partys.find((party) =>
            this.player.isColliding(party)
        );
        if (partyColliding && this.health <= 350 && this.health > 400) {
            this.finishGame();
        }
        else if (partyColliding) { 
            partyColliding.yFrame = 1;
            this.noParty.play();
        }


        const powerUpColliding = this.powerUps.find((powerUp) =>
            this.player.isColliding(powerUp)
        );

        if (powerUpColliding) {
            switch (powerUpColliding.constructor.name) {
                case "Cbd":
                    this.health = this.health + 5;
                    this.drugs.play();
                    break;
                case "Anphe":
                    this.health = this.health + 15;
                    this.drugs.play();
                    break;
                case "Bottle":
                    this.health = this.health + 10;
                    this.drank.play();
                    break;
            }
            this.powerUps.splice(this.powerUps.indexOf(powerUpColliding), 1);
        }
        const enemiesCollidingArr = this.enemys.filter((enemy) =>
            this.player.isColliding(enemy)
        );

        enemiesCollidingArr.map(enemyColliding => {
            if (enemyColliding && !enemyColliding.isColliding) {
                enemyColliding.isMoving = false;
                enemyColliding.isColliding = true;
                enemyColliding.speed = 0;
                enemyColliding.xFrame = 0;
                setTimeout(() => {
                    if (enemyColliding.direction.right) {
                        enemyColliding.yFrame = 5;
                    } else {
                        enemyColliding.yFrame = 1;
                    }
                    enemyColliding.isPunching = true;
                }, 800);
                setTimeout(() => {
                    enemyColliding.isColliding = false;
                    enemyColliding.isMoving = true;
                    if (enemyColliding?.direction?.right) {
                        enemyColliding.yFrame = 4;
                    } else {
                        enemyColliding.yFrame = 0;
                    }
                    enemyColliding.yFrame = 0;
                    enemyColliding.isPunching = false;
                    enemyColliding.speed = -2;
                }, 2000);
            }
            /// DAÑO AL PLAYER
            if (
                enemyColliding &&
                (enemyColliding.yFrame === 1 || enemyColliding.yFrame === 5)
            ) {
                this.health = this.health - enemyColliding.damage / 10;
                this.player.isPunch = false;
                setTimeout(() => {
                    this.punchSound.play();
                }, 300);
    
                if (this.player.direction.right) {
                    this.player.horizontalFrames = 4;
                    this.player.yFrame = 6;
                    this.player.xFrame = 0;
                } else {
                    this.player.horizontalFrames = 4;
                    this.player.yFrame = 7;
                    this.player.xFrame = 2;
                }
            }
            
            /// DAÑO AL ENEMIGO
            if (enemyColliding && this.player.isPunch && this.player.xFrame >= 1) {
                enemyColliding.health = enemyColliding.health - 1 / 2;
                enemyColliding.isPunching = false;
                enemyColliding.isMoving = false;
                this.punchSound.play();
                if (enemyColliding.direction.right) {
                    enemyColliding.yFrame = 6;
                } else {
                    enemyColliding.yFrame = 2;
                }
    
                if (enemyColliding.health <= 0) {
                    console.log("muerto");
                    enemyColliding.death = true;
                    this.enemys.splice(this.enemys.indexOf(enemyColliding), 1);
                }
                setTimeout(() => {
                    this.punchSound.play();
                }, 300);
            }
        })


        this.platforms.find((plat) => {
            if (
                this.player.x < plat.x + plat.width &&
                this.player.x + this.player.width > plat.x &&
                this.player.y < plat.y + plat.height &&
                this.player.y + this.player.height > plat.y &&
                this.player.prevY + this.player.height <= plat.y
                
            ) {
                this.player.y = this.player.prevY;
                this.player.isPlatform = true;
            }
        });
    }



    drawHealth() {
        this.ctx.fillStyle = "#fff";
        this.ctx.font = "24px Arial";
        this.ctx.fillText("Health: " + this.health, 10, 30);
        const life = this.health/2;
        let color = 'green';
        if (life < 0){
            this.gameOver();
        }
        if (life <= 20){
            color = 'red'
        }
        else if (life > 20 && life <= 100){
            color = 'yellow'
        }
        else if (life >= 100 && life <=200){
            color = 'blue'
        }
        else if (life <200){
            color = 'orange'
        }

        this.ctx.fillStyle = color;
        this.ctx.strokeRect(80, 50, 200, 20);
        this.ctx.fillRect(80, 50, life, 20);
    }

    gameOver() {
        this.enemys.forEach((enemy) => {
            enemy.isMoving = false;
            enemy.speed = 0;
            if (enemy.direction.right){
                enemy.yFrame = 3;
            }
            if (enemy.direction.left){
                enemy.yFrame = 7;
            }
        });
        this.player.isDeath = true;
        setTimeout(() => {
            clearInterval(this.intervalId);
            this.ctx.save();
        }, 3000);
        this.soundBg.pause();
        this.soundOver.play();
      }

    finishGame() {
        clearInterval(this.intervalId);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}









// document.getElementById("game-over").style.display = "flex";
        // this.isGameOver = true;
        // this.ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        // this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        // document.getElementById("skip-btn").style.display = "none";
        // this.sound.pause();
        // this.gameoverSound.play();