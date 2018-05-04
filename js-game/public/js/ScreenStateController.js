function ScreenStateController(game) {
    this.game = game;
    this.currentState = "BeforeStart";
}


ScreenStateController.prototype.getState = function () {
    return this.state;
};


ScreenStateController.prototype.next = function (game) {
	if(this.currentState === "MainMenu") {
		game.state.start("FairyLevel")
		this.setState("FairyLevel");
	}

	else if(this.currentState === "BeforeStart") {
		game.state.start("MainMenu")
		this.setState("MainMenu");
	}

	else if(this.currentState === "FairyLevel") {
		game.state.start("Batman")
		this.setState("Batman");
	}

	else if(this.currentState === "Batman") {
		game.state.start("Queen")
		this.setState("Queen");
	}
};

ScreenStateController.prototype.setState = function (newState) {
	this.currentState = newState;
};

