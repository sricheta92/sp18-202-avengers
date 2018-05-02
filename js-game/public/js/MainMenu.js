Game.MainMenu = function(game){
    console.log("constructor");

};

var controls  = {} ;

Game.MainMenu.prototype = {
	preload : function(){
	},

	create : function(){
		this.add.tileSprite(0, 0, 600, 500, 'start');
		controls = {
			space : this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
		};
	},

	update: function() {
		if(controls.space.isDown){
		    console.log("space");
			this.start();
		}

	},

	start: function() {
		//this.state.start('Level1') ;
        this.state.start('Level1');
	}
}; 