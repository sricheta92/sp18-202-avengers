Game.FairyLevel = function(game){
    console.log("Level2 constructor");

    this.player = null;
    this.map = null;
    this.factory = new GamePartsFactory(this);
  //  this.compositeController = new CompositeController(this);

};




Game.FairyLevel.prototype = {
    preload : function(){

    },


    create : function(){

        this.add.tileSprite(0, 0, 640, 640, 'fairy_bg');
        this.map = this.add.tilemap('map');
        this.map.addTilesetImage('tileset');

        this.player = this.add.sprite(75 , 800 , 'player');
        this.player.anchor.setTo(0.5,0.5);

        this.player.animations.add('idle' , [0,1] , 1 , true);
        this.player.animations.add('jump' , [2] , 1 , true);
        this.player.animations.add('run' , [3,4,5,6,7,8,9] , 7 , true);
        this.physics.arcade.enable(this.player);
        this.camera.follow(this.player);

        this.player.body.collideWorldBounds = true ;

    }


};