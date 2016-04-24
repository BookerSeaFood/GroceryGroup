var Item = function() {
	this.id = '_id_';
};

Item.prototype.getID = function() {
		return this.id;
};

Item.prototype.setID = function(id) {
	this.id = id;
};

var GroceryItem = function () {
	Item.call(this);
	this.name = "potato";
};

GroceryItem.prototype = Object.create(Item.prototype);
GroceryItem.prototype.constructor = Item;

GroceryItem.prototype.meh = function() {
	alert(this.name);
};

//==============================================

alert('begin test...');

var testItem = new Item();
alert(testItem.getID());

testItem.setID('000');
alert(testItem.getID());

var gItem = new GroceryItem();
alert(gItem.getID());
gItem.setID('woot!');
alert(gItem.getID());
gItem.meh();
