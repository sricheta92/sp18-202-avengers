/**
 *
 * @author: Huy Vo
 * @description: Composite Design Pattern
 */
function CompositeController() {
    console.log("composite controller constructor");
    this.children = [];
}

CompositeController.prototype.add = function (action) {
    this.children.push(action);
};

CompositeController.prototype.update = function () {
    console.log("composite controller update");
    for(var i = 0; i < this.children.length; i++ ){
        this.children[i].update(); // execute
    }
};

CompositeController.prototype.getChild = function (i) {
	return this.children[i]; 
};

CompositeController.prototype.hasChildren = function () {
	return this.children.length > 0; 
}; 

CompositeController.prototype.remove = function (child) {
    var length = this.children.length;
    for (var i = 0; i < length; i++) {
        if (this.children[i] === child) {
            this.children.splice(i, 1);
            return;
        }
    }
};