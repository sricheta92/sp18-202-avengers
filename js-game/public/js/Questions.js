/**
 * author: Huy Vo
 * description: State Design pattern
 */
function Question(theQuestion, theSolution, theCommand) {
    this.theQuestion = theQuestion;
    this.theSolution = theSolution;
    this.theCommand  = theCommand;

    this.incorrectState = new IncorrectState(this);
    this.correctState   = new CorrectState(this);
    this.currentState   = this.incorrectState;

}
// Getter 
Question.prototype.getTheQuestion = function () {
    return this.theQuestion;
};
// Getter 
Question.prototype.getTheSolution = function () {
    return this.theSolution;
};

Question.prototype.askIt = function () {
    this.currentState.askIt();
};

/*
// Tell the Phase Game object to go to next level
Question.prototype.goToNextLevel = function () {
    this.theGame.goToNextLevel();
};*/

Question.prototype.setCurrentState = function (state) {
    this.currentState = state;

    if(this.currentState === "correctState"){
        // move to next level
        console.log("move to next level");
        this.theCommand.execute();
    }else{
        // refresh
        window.location.href = window.location.href;
        this.askIt();
    }
};

Question.prototype.getIncorrectState = function () {
    return this.incorrectState;
};

Question.prototype.getCorrectState = function () {
    return this.correctState;
};
// End Question

/*
 * IncorrectState
 */
function IncorrectState(questionContext) {
    this.questionContext = questionContext;
}

IncorrectState.prototype.askIt = function () {
    var response = prompt(this.questionContext.getTheQuestion());

    if(response == null){
        return
    }

    if(response === this.questionContext.getTheSolution()){
        this.questionContext.setCurrentState("correctState");
    }else{
        this.questionContext.setCurrentState("incorrectState");
    }
};

/*
 * CorrectState
 */
function CorrectState(questionContext) {
    this.questionContext = questionContext;
}

CorrectState.prototype.askIt = function () {
    // do nothing
};