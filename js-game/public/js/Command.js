/*
 * @author: Huy Vo 
 * @description: Command Design Pattern 
 */
function Command(game, execute) {
    this.execute = execute;
    this.game = game;

}


Command.prototype.update = function () {
    this.execute(this.game);
};