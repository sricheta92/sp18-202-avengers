var game = new Phaser.Game(800,600,Phaser.CANVAS,'gameDiv');
var spacefield;
var b;

var mainState = {
	preload: function(){
		game.load.image('background',"assets/game_with_background.png");
	},

	create: function(){

		spacefield = game.add.tileSprite(0,0,800,600,'background');
		b = 5;

	},

	update: function(){
		spacefield.tilePosition.y+=b;
	}
}

game.state.add('mainState',mainState);
game.state.start('mainState');