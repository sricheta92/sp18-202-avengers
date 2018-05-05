/**
 * @author: Huy Vo 
 * @description: Command Design Pattern 
 */
function Command(context, execute) {
    this.execute = execute;
    this.context = context;

}


Command.prototype.update = function () {
    this.execute(this.context);
};