/*
 * author: Mangesh Tak 
 * description: Proxy Design Pattern 
 */
function GameProxy() {

	this.game = new Phaser.Game(640	,640 , Phaser.CANVAS , '');

	this.authenticated = false;

	this.game.state.add('Boot', Game.Boot);
	this.game.state.add('Preloader', Game.Preloader);
	this.game.state.add('MainMenu', Game.MainMenu);
	// Load levels

	this.game.state.add('Queen', Game.QueenLevel);
	this.game.state.add('Batman', Game.BatmanLevel);
	this.game.state.add('FairyLevel', Game.FairyLevel);

	this.game.screenStateController = new ScreenStateController();
    this.name = null;
	this.theQuestion = new Question("type 123", "123", new Command(this, function (game) {
 
	    game.setAuthenticated(true);

	    game.start(game.name);
    }));

	 
}

GameProxy.prototype.setAuthenticated = function (bool) {
    this.authenticated = bool;
};

GameProxy.prototype.start = function (name) {

	 if(this.authenticated===true)
	 {
	 	this.game.state.start(name);	
	 }
	 else
	 {
	     this.name = name;
	     this.theQuestion.askIt();
	 }
};
