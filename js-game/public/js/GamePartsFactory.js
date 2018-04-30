function GamePartsFactory(level) {
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

    return object;
};

GamePartsFactory.prototype.createEnemy = function (enemiesGroup) {
    var enemy = enemiesGroup.create(48, 50, 'enemy');
    enemy.anchor.setTo(0.5,0.5);


    return enemy;

};