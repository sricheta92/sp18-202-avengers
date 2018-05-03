/*
 * author: Mangesh Tak 
 * description: Proxy Design Pattern 
 */
function GameProxy() {

	this.game = new Phaser.Game(640	,640 , Phaser.CANVAS , '');

	this.authenticated = true;

	this.game.state.add('Boot', Game.Boot);
	this.game.state.add('Preloader', Game.Preloader);
	this.game.state.add('MainMenu', Game.MainMenu);
	// Load levels

	this.game.state.add('Batman', Game.Batman);
	this.game.state.add('bridge', Game.bridge);
	this.game.state.add('FairyLevel', Game.FairyLevel);


	this.theQuestion = new Question("type 123", "123", new Command(this, function () {
	    game.authenticated = true;
	    game.onStart();
    }));

	 
}

GameProxy.prototype.start = function (name) {

	 if(this.authenticated===true)
	 {
	 	this.game.state.start(name);	
	 }
	 else
	 {
	     this.theQuestion.askIt();
	 }
}
