function GamePartsFactory(level) {

    this.diff = null;

    this.firstDiff = null;

    this.level = level ;

    this.enemyCount = 0;

    console.log("Enemies Factory");
}


GamePartsFactory.prototype.create = function (input) {
    console.log("Create");

    var object = null;

    if (input === "enemies"){
        console.log("create enemies");
        object = this.level.add.group();
        object.enableBody = true;
        object.physicsBodyType = Phaser.Physics.ARCADE;
    }

    if (input === "bombs"){
        object = this.level.add.group();
        object.enableBody = true;
        object.physicsBodyType = Phaser.Physics.ARCADE;
        object.createMultiple(30, 'bomb');
        object.setAll('anchor.x', 0.5);
        object.setAll('anchor.y', 1);
        object.setAll('outOfBoundsKill', true);
        object.setAll('checkWorldBounds', true);
    }

    if( input === "rocks"){
        object = this.level.add.group();
        object.enableBody = true;
        object.physicsBodyType = Phaser.Physics.ARCADE;
    }

    if( input === "fireballs"){
        object = this.level.add.group();
        object.enableBody = true;
        object.physicsBodyType = Phaser.Physics.ARCADE;
    }
    return object;
};

GamePartsFactory.prototype.createFireball = function (group) {
    if(this.firstDiff === null){
        this.firstDiff = 0;
    }

    if(!( Date.now() - this.firstDiff >= 1000 )){
        return null;
    }

    this.firstDiff = Date.now();

    var fireball = group.create(48, 50, 'fireball');
    fireball.anchor.setTo(0.5,0.5);
    fireball.scale.set(0.1/2,0.1/2);
    return fireball;
};

GamePartsFactory.prototype.createEnemy = function (enemiesGroup) {
    var enemy = enemiesGroup.create(50, 50, 'enemy');
    if(this.enemyCount == 0) {
        enemy.anchor.setTo(1, -18); 
    } else if(this.enemyCount == 1) {
        enemy.anchor.setTo(-10, -10);
    } else if(this.enemyCount == 2) {
        enemy.anchor.setTo(-15, -8);
    } else if(this.enemyCount == 3) {
        enemy.anchor.setTo(-10, 1.5);
    } else {
        enemy.anchor.setTo(-12,1.5);
    }
    this.enemyCount += 1;
    enemy.scale.set(0.1,0.1);
    return enemy;
};

GamePartsFactory.prototype.createBomb = function (group) {
    var bomb = group.create(70, 70, 'bombs');
    bomb.anchor.setTo(0,0);
    bomb.scale.set(0.2,0.2);
    return bomb;
};

GamePartsFactory.prototype.createRock = function (group) {

    if(group.countLiving() === 20){
        return null;
    }

    if(this.diff === null){
        this.diff = null;
    }

    if(!( Date.now() - this.diff >= 2000 )){
        return null;
    }

    this.diff = Date.now();

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    var posX = getRandomInt(0, 680);
    var posY = getRandomInt(0, 680);

    console.log(posY);
    console.log(posX);

    var rock = group.create(posX, 10, 'rock');
    rock.anchor.setTo(.05, .5);

    rock.scale.set(0.1/2,0.1/2);
    rock.body.velocity.y = 50 ;
    return rock;
};