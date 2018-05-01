function GamePartsFactory(level) {

    this.diff = null;

    this.level = level ;

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

    if (input === "bullets"){
        object = this.level.add.group();
        object.enableBody = true;
        object.physicsBodyType = Phaser.Physics.ARCADE;
        object.createMultiple(30, 'bullet');
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

    return object;
};

GamePartsFactory.prototype.createEnemy = function (enemiesGroup) {
    var enemy = enemiesGroup.create(48, 50, 'enemy');
    enemy.anchor.setTo(0.5,0.5);
    return enemy;
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
    return rock;
};