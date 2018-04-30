Game.FairyLevel = function(game){
    console.log("Level2 constructor");

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
    }


};