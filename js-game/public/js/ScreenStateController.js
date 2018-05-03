function ScreenStateController(game) {
    this.game = game;
    this.state = "MainMenu";
}


ScreenStateController.prototype.getState = function () {
	alert("this is called");
    return this.state;
};


ScreenStateController.prototype.next = function (currentState, game) {
	if(currentState === "MainMenu") {
		game.state.start("FairyLevel")
	}

	if(currentState === "FairyLevel") {
		game.state.start("Batman")
	}
};