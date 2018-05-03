function ScreenStateController(game) {
    this.game = game;
    this.currentState = "MainMenu";
}


ScreenStateController.prototype.getState = function () {
	alert("this is called");
    return this.state;
};


ScreenStateController.prototype.next = function (game) {
	if(this.currentState === "MainMenu") {
		game.state.start("FairyLevel")
		this.setState("FairyLevel");
	}

	else if(this.currentState === "FairyLevel") {
		game.state.start("Batman")
		this.setState("Batman");
	}
};

ScreenStateController.prototype.setState = function (newState) {
	this.currentState = newState;
};