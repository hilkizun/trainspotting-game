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

            new Bottle(this.ctx, 300, 440, 32),
            new Cbd(this.ctx, 500, 440, 32),
            new Bottle(this.ctx, 700, 440, 32),
            new Anphe(this.ctx, 900, 440, 32),
            new Bottle(this.ctx, 700, 152, 32),
            new Anphe(this.ctx, 857, 100, 32),
            new Bottle(this.ctx, 1023, 152, 32),
            new Cbd(this.ctx, 1193, 100, 32),
            new Bottle(this.ctx, 1373, 152, 32),
            new Anphe(this.ctx, 1521, 172, 32),
            new Bottle(this.ctx, 1607, 440, 32),
            new Cbd(this.ctx, 1670, 230, 32),
            new Bottle(this.ctx, 2081, 152, 32),
            new Bottle(this.ctx, 2145, 152, 32),
            new Bottle(this.ctx, 2207, 152, 32),
            new Cbd(this.ctx, 3045, 300, 32),
            new Bottle(this.ctx, 3705, 312, 32),
            new Anphe(this.ctx, 4021, 152, 32),
            new Bottle(this.ctx, 4360, 152, 32),
            new Anphe(this.ctx, 4840, 152, 32),

            new Anphe(this.ctx, 5700, 440, 32),
            new Cbd(this.ctx, 5900, 440, 32),
            new Bottle(this.ctx, 6300, 440, 32),
            new Bottle(this.ctx, 6100, 152, 32),
            new Anphe(this.ctx, 6257, 100, 32),
            new Bottle(this.ctx, 6423, 152, 32),
            new Cbd(this.ctx, 6593, 100, 32),
            new Bottle(this.ctx, 6773, 152, 32),
            new Anphe(this.ctx, 6921, 172, 32),
            new Bottle(this.ctx, 7007, 440, 32),
            new Anphe(this.ctx, 7070, 230, 32),
            new Cbd(this.ctx, 7481, 152, 32),
            new Cbd(this.ctx, 7545, 152, 32),
            new Cbd(this.ctx, 7607, 152, 32),
            new Anphe(this.ctx, 8445, 300, 32),
            new Bottle(this.ctx, 9105, 312, 32),
            new Anphe(this.ctx, 9421, 152, 32),
            new Bottle(this.ctx, 9760, 152, 32),
            new Anphe(this.ctx, 10240, 152, 32),
            new Cbd(this.ctx, 10585, 185, 32),
            new Anphe(this.ctx, 10710, 185, 32),

            new Anphe(this.ctx, 11000, 440, 32),
            new Cbd(this.ctx, 11300, 440, 32),
            new Bottle(this.ctx, 11700, 440, 32),
            new Cbd(this.ctx, 11500, 152, 32),
            new Anphe(this.ctx, 11657, 100, 32),
            new Bottle(this.ctx, 11823, 152, 32),
            new Cbd(this.ctx, 11993, 100, 32),
            new Bottle(this.ctx, 12173, 152, 32),
            new Anphe(this.ctx, 12321, 172, 32),
            new Bottle(this.ctx, 12407, 440, 32),
            new Cbd(this.ctx, 12470, 230, 32),
            new Anphe(this.ctx, 12881, 152, 32),
            new Anphe(this.ctx, 12945, 152, 32),
            new Anphe(this.ctx, 13007, 152, 32),
            new Anphe(this.ctx, 13845, 300, 32),
            new Bottle(this.ctx, 14505, 312, 32),
            new Anphe(this.ctx, 14821, 152, 32),
            new Bottle(this.ctx, 15160, 152, 32),
            new Cbd(this.ctx, 156540, 152, 32),
            new Bottle(this.ctx, 15985, 185, 32),
            new Cbd(this.ctx, 16110, 185, 32),

            new Anphe(this.ctx, 16400, 440, 32),
            new Cbd(this.ctx, 16700, 440, 32),
            new Bottle(this.ctx, 17400, 440, 32),
            new Cbd(this.ctx, 16900, 152, 32),
            new Anphe(this.ctx, 17057, 100, 32),
            new Anphe(this.ctx, 17223, 152, 32),
            new Cbd(this.ctx, 17393, 100, 32),
            new Anphe(this.ctx, 17573, 152, 32),
            new Anphe(this.ctx, 17721, 172, 32),
            new Bottle(this.ctx, 17907, 440, 32),
            new Cbd(this.ctx, 17970, 230, 32),
            new Bottle(this.ctx, 18281, 152, 32),
            new Bottle(this.ctx, 18345, 152, 32),
            new Bottle(this.ctx, 18407, 152, 32),
            new Bottle(this.ctx, 19245, 300, 32),
            new Cbd(this.ctx, 19905, 312, 32),
            new Anphe(this.ctx, 20221, 152, 32),
            new Bottle(this.ctx, 20560, 152, 32),
            new Cbd(this.ctx, 210540, 152, 32),
            new Bottle(this.ctx, 21385, 185, 32),
            new Anphe(this.ctx, 21510, 185, 32),

            new Anphe(this.ctx, 21800, 440, 32),
            new Cbd(this.ctx, 22100, 440, 32),
            new Bottle(this.ctx, 22400, 440, 32),
            new Cbd(this.ctx, 22300, 152, 32),
            new Anphe(this.ctx, 22457, 100, 32),
            new Anphe(this.ctx, 22623, 152, 32),
            new Cbd(this.ctx, 22793, 100, 32),
            new Anphe(this.ctx, 22973, 152, 32),
            new Anphe(this.ctx, 23121, 172, 32),
            new Bottle(this.ctx, 23307, 440, 32),
            new Cbd(this.ctx, 23370, 230, 32),
            new Bottle(this.ctx, 23681, 152, 32),
            new Bottle(this.ctx, 23745, 152, 32),
            new Bottle(this.ctx, 23807, 152, 32),
            new Bottle(this.ctx, 24645, 300, 32),
            new Cbd(this.ctx, 25305, 312, 32),
            new Anphe(this.ctx, 25621, 152, 32),
            new Bottle(this.ctx, 25960, 152, 32),
            new Cbd(this.ctx, 264540, 152, 32),
            new Bottle(this.ctx, 26785, 185, 32),
            new Anphe(this.ctx, 26910, 185, 32),
        ];

        this.enemys = [
            new Enemy(this.ctx, 1000, 405, this.bg),
            new Bigenemy(this.ctx, 2000, 395, this.bg),
            new Enemy(this.ctx, 3000, 405, this.bg),
            new Bigenemy(this.ctx, 4000, 395, this.bg),
            new Enemy(this.ctx, 5000, 405, this.bg),
            new Bigenemy(this.ctx, 6000, 395, this.bg),
            new Enemy(this.ctx, 7000, 405, this.bg),
            new Enemy(this.ctx, 8000, 405, this.bg),
            new Enemy(this.ctx, 9000, 405, this.bg),
            new Bigenemy(this.ctx, 10000, 395, this.bg),
            new Enemy(this.ctx, 11000, 405, this.bg),
            new Bigenemy(this.ctx, 11500, 395, this.bg),
            new Enemy(this.ctx, 12000, 405, this.bg),
            new Bigenemy(this.ctx, 13000, 395, this.bg),
            new Enemy(this.ctx, 14000, 405, this.bg),
            new Enemy(this.ctx, 15000, 405, this.bg),
            new Enemy(this.ctx, 15500, 405, this.bg),
            new Bigenemy(this.ctx, 16000, 395, this.bg),
            new Enemy(this.ctx, 17000, 405, this.bg),
            new Bigenemy(this.ctx, 18000, 395, this.bg),
            new Enemy(this.ctx, 19000, 405, this.bg),
            new Bigenemy(this.ctx, 20000, 395, this.bg),
            new Enemy(this.ctx, 21000, 405, this.bg),
            new Enemy(this.ctx, 26000, 405, this.bg),
            new Enemy(this.ctx, 27000, 405, this.bg),
            new Bigenemy(this.ctx, 28000, 395, this.bg),
            new Enemy(this.ctx, 29000, 405, this.bg),
            new Bigenemy(this.ctx, 30000, 395, this.bg),
            new Bigenemy(this.ctx, 31000, 395, this.bg),
            new Bigenemy(this.ctx, 33000, 395, this.bg),
            new Enemy(this.ctx, 34000, 405, this.bg),
            new Enemy(this.ctx, 36000, 405, this.bg),
            new Enemy(this.ctx, 37000, 405, this.bg),
            new Bigenemy(this.ctx, 38000, 395, this.bg),
            new Enemy(this.ctx, 40000, 405, this.bg),
            new Bigenemy(this.ctx, 41000, 395, this.bg),
            new Enemy(this.ctx, 42000, 405, this.bg),
            new Bigenemy(this.ctx, 43000, 395, this.bg),
            new Enemy(this.ctx, 44000, 405, this.bg),
            new Enemy(this.ctx, 45000, 405, this.bg),
            new Enemy(this.ctx, 46000, 405, this.bg),
            new Bigenemy(this.ctx, 47000, 395, this.bg),
            new Enemy(this.ctx, 48000, 405, this.bg),
            new Bigenemy(this.ctx, 49500, 395, this.bg),
            new Enemy(this.ctx, 50000, 405, this.bg),
            new Bigenemy(this.ctx, 51000, 395, this.bg),
            new Enemy(this.ctx, 52000, 405, this.bg),
            new Enemy(this.ctx, 53000, 405, this.bg),
            new Enemy(this.ctx, 54500, 405, this.bg),
            new Enemy(this.ctx, 5500, 405, this.bg),
            new Bigenemy(this.ctx, 56000, 395, this.bg),
            new Enemy(this.ctx, 57000, 405, this.bg),
            new Bigenemy(this.ctx, 58000, 395, this.bg),
            new Enemy(this.ctx, 59000, 405, this.bg),
            new Bigenemy(this.ctx, 60000, 395, this.bg),
            new Enemy(this.ctx, 61000, 405, this.bg),
            new Enemy(this.ctx, 62000, 405, this.bg),
            new Enemy(this.ctx, 63000, 405, this.bg),
            new Bigenemy(this.ctx, 64000, 395, this.bg),
            new Enemy(this.ctx, 65000, 405, this.bg),
            new Bigenemy(this.ctx, 66500, 395, this.bg),
            new Enemy(this.ctx, 67000, 405, this.bg),
            new Bigenemy(this.ctx, 68000, 395, this.bg),
            new Enemy(this.ctx, 69000, 405, this.bg),
            new Enemy(this.ctx, 70000, 405, this.bg),
            new Enemy(this.ctx, 71500, 405, this.bg),
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
            new Platform(this.ctx, 1960, 300, 10, 0),
            new Platform(this.ctx, 2058, 196, 195, 0),
            new Platform(this.ctx, 2340, 300, 10, 0),
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
            new Platform(this.ctx, 7360, 300, 10, 0),
            new Platform(this.ctx, 7458, 196, 195, 0),
            new Platform(this.ctx, 7740, 300, 10, 0),            
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
            new Platform(this.ctx, 12760, 300, 10, 0),
            new Platform(this.ctx, 12858, 196, 195, 0),
            new Platform(this.ctx, 13140, 300, 10, 0),            
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
            new Platform(this.ctx, 18160, 300, 10, 0),
            new Platform(this.ctx, 18258, 196, 195, 0),
            new Platform(this.ctx, 18540, 300, 10, 0),             
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

            new Platform(this.ctx, 21625, 280, 211, 0),
            new Platform(this.ctx, 21655, 372, 150, 0),
            new Platform(this.ctx, 22002, 360, 264, 0),
            new Platform(this.ctx, 22211, 197, 195, 0),
            new Platform(this.ctx, 22535, 197, 195, 0),
            new Platform(this.ctx, 22871, 196, 195, 0),
            new Platform(this.ctx, 23175, 279, 211, 0),
            new Platform(this.ctx, 23206, 372, 150, 0),
            new Platform(this.ctx, 23560, 300, 10, 0),
            new Platform(this.ctx, 23658, 196, 195, 0),
            new Platform(this.ctx, 23940, 300, 10, 0),             
            new Platform(this.ctx, 34194, 281, 195, 0),
            new Platform(this.ctx, 24220, 373, 145, 0),
            new Platform(this.ctx, 24530, 360, 250, 0),
            new Platform(this.ctx, 24917, 198, 180, 0),
            new Platform(this.ctx, 25217, 282, 200, 0),
            new Platform(this.ctx, 25345, 373, 146, 0),
            new Platform(this.ctx, 25640, 196, 180, 0),
            new Platform(this.ctx, 25879, 198, 180, 0),
            new Platform(this.ctx, 26364, 198, 180, 0),
            new Platform(this.ctx, 26762, 230, 185, 0),
            new Platform(this.ctx, 26813, 370, 83, 0),
        ];
        
        this.soundBg = new Audio('./sounds/music.mp3');
        this.soundBg.volume = 0.3;
        this.soundBg.loop = true;
        this.soundBg.speed = 10;
        this.drank = new Audio('./sounds/drank.mp3');
        this.drank.volume = 0.1;
        this.drugs = new Audio('./sounds/drugs.mp3');
        this.drugs.volume = 0.1;
        this.soundOver = new Audio ('./sounds/gameover.wav')
        this.punchSound = new Audio ('./sounds/punch.wav')
        this.punchSound.volume = 0.1;
        this.noParty = new Audio('./sounds/noparty.mp3')
        this.noParty.volume = 0.2;
        this.slowSound = new Audio('./sounds/slowSound.mp3')
        this.slowSound.volume = 0.3;
        this.youWin = new Audio ('./sounds/you-win.wav')
        this.youWin.volume = 0.;

        this.health = 10;
        this.enemiesDeath = 0;
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
        this.drawDeaths();
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
        if (partyColliding && this.health >= 350 && this.health <= 400 && partyColliding.yFrame !== 1) {
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
                    this.health = this.health + 8;
                    this.drugs.play();
                    break;
                case "Anphe":
                    this.health = this.health + 20;
                    this.drugs.play();
                    break;
                case "Bottle":
                    this.health = this.health + 15;
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
                }, 200);
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
                    enemyColliding.speed = -4;
                }, 2000);
            }
            /// DAÑO AL PLAYER
            if (
                enemyColliding &&
                ((enemyColliding.yFrame === 1 || enemyColliding.yFrame === 5)&& enemyColliding.xFrame === 1 && !this.player.isDeath)
            ) {
                this.health = this.health - enemyColliding.damage / 10;
                this.player.isPunch = false;
                if (this.player.direction.right) {
                    this.player.horizontalFrames = 4;
                    this.player.yFrame = 6;
                    this.player.xFrame = 0;
                } else {
                    this.player.horizontalFrames = 4;
                    this.player.yFrame = 7;
                    this.player.xFrame = 2;
                }
                setTimeout(() => {
                    this.punchSound.play();
                }, 350);
    

            }
            if (enemyColliding && !this.player.isPunch && !this.player.isDeath) {
                this.health -= 1/4
            }

            
            /// DAÑO AL ENEMIGO
            if (enemyColliding && this.player.isPunch && this.player.xFrame >= 1) {
                enemyColliding.health = enemyColliding.health - 1;
                enemyColliding.isPunching = false;
                enemyColliding.isMoving = false;
                this.punchSound.play();
                if (enemyColliding.direction.right) {
                    enemyColliding.yFrame = 6;
                } else {
                    enemyColliding.yFrame = 2;
                }
    
                if (enemyColliding.health <= 0) {
                    this.enemiesDeath += 1;
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
        const life = this.health/2;
        let color = 'green';
        if (life <= 0){
            this.gameOver();
            }
        if (life <= 20){
            color = 'red'
        }
        if (life > 20 && life <= 100){
            color = 'yellow'
        }
        if (life > 100 && life <=175){
            color = 'blue'
        }
        if (life > 175 && life <=200){
            color = 'green'
        } 
        if (life > 175 && life <=200 && this.player.isDrunk){
            color = 'green'
            this.soundBg.play();
            this.player.isDrunk = false;
            this.slowSound.pause();
            this.player.gravity = 0.35; 
        } 
        
        if (life > 200){
            color = 'orange'
            this.player.isDrunk = true;
            this.soundBg.pause();
            this.slowSound.play();
        }

        this.ctx.fillStyle = color;
        this.ctx.strokeRect(16, 16, 200, 16);
        this.ctx.fillRect(16, 16, life, 16);
    }

    drawDeaths(){
        this.ctx.fillStyle = "#red";
        this.ctx.font = "16px Holtwood One SC";
        this.ctx.fillText("Enemies: " + this.enemiesDeath, 224, 28);
    }


    gameOver() {
        this.enemys.forEach((enemy) => {
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
        this.soundBg.pause();
        this.youWin.play();
        this.enemys.forEach((enemy) => {
            enemy.isMoving = false;
            enemy.speed = 0;
            if (enemy.direction.right){
                enemy.yFrame = 2;
            }
            if (enemy.direction.left){
                enemy.yFrame = 6;
            }
        });
        
        setTimeout(() => {
            clearInterval(this.intervalId);
            this.soundBg.pause();
            document.body.innerHTML = '<h1>Laat het feest beginnen!</h1><iframe width="560" height="315" src="https://www.youtube.com/embed/SPlQpGeTbIE?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }, 3000);
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