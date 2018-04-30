/**
 *
 * State Design Pattern
 */
function CompositeController(game) {
    console.log("composite controller constructor");
    this.game = game;

    this.children = [];
}

CompositeController.prototype.add = function (child) {
    this.children.push(child);
};

CompositeController.prototype.update = function () {

    for(var i = 0; i < this.children.length; i++ ){

    }
};