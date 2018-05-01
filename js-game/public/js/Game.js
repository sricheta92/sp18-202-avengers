/*var game = new Phaser.Game(640	,640 , Phaser.CANVAS , '');

var authenticated = false;

game.state.add('Boot', Game.Boot);
game.state.add('Preloader', Game.Preloader);
game.state.add('MainMenu', Game.MainMenu);
// Load levels

game.state.add('Level1', Game.Level1);
game.state.add('FairyLevel', Game.FairyLevel);
*/

/**
 * Start boot
 */
/*game.onStart = function () {
    game.state.start('Boot');
};*/

function GameProxy() {

	this.game = new Phaser.Game(640	,640 , Phaser.CANVAS , '');

	this.authenticated = true;

	this.game.state.add('Boot', Game.Boot);
	this.game.state.add('Preloader', Game.Preloader);
	this.game.state.add('MainMenu', Game.MainMenu);
	// Load levels

	this.game.state.add('Level1', Game.Level1);
	this.game.state.add('FairyLevel', Game.FairyLevel);

	 
}

GameProxy.prototype.onStart = function () {

	 if(this.authenticated===true)
	 {
	 	this.game.state.start('Boot');	
	 }
	 else
	 {
	 	// to-do
	 }


	
}

var game = new GameProxy();
game.onStart();