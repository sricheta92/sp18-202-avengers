/**
 * @author: Huy Vo 
 * @description: Command Design Pattern 
 */
function Command(state, execute) {
    this.execute = execute;
    this.state = state; 

}


Command.prototype.update = function () {
    this.execute(this.state);
};