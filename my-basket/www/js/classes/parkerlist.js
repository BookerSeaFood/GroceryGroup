if (mb == null || typeof(mb) != 'object') {
	var mb = new Object();
	mb.nextGlobalID = 0;
	mb.nextID = function() {
		mb.nextGlobalID += 1;
		return mb.nextGlobalID;
	}
}

//==============================================================================
mb.Item = function() {
	this.id = mb.nextID();
}

mb.Item.prototype.getID = function() {
		return this.id;
}

mb.Item.prototype.setID = function(id) {
	this.id = id;
}

//==============================================================================
mb.GroceryItem = function (name, quantity) {
	mb.Item.call(this);
	this.name = '_name_';
	this.quantity = 0;
	this.date = new Date();
}
mb.GroceryItem.prototype = Object.create(mb.Item.prototype);
mb.GroceryItem.prototype.constructor = mb.Item;

mb.GroceryItem.prototype.getName = function() {
	return this.name;
}

mb.GroceryItem.prototype.setName = function(name) {
	this.name = name;
}

mb.GroceryItem.prototype.getQuantity = function() {
	return this.quantity;
}

mb.GroceryItem.prototype.setQuantity= function (quantity) {
	this.quantity = quantity;
}

mb.GroceryItem.prototype.getDate = function() {
	return this.date;
}

mb.GroceryItem.prototype.setDate = function(year, month, day) {
	this.date = new Date(year, month, day);
}

mb.GroceryItem.prototype.toHTML = function(that) {
	return '<a class="item' + that.id.toString() + '" href="#editItemPage">' + that.name + ' x' + that.quantity.toString() + '</a>';
};

//==============================================================================

alert('begin test...');

var testItem = new mb.Item();
alert(testItem.getID());

testItem.setID(8);
alert(testItem.getID());

var gItem = new mb.GroceryItem();
alert(gItem.getID());
alert(gItem.getName());
gItem.setName("potato");
alert(gItem.getName());
alert(gItem.getQuantity());
gItem.setQuantity(7);
alert(gItem.getQuantity());
alert(gItem.getDate());
gItem.setDate(1994,4,8);
alert(gItem.getDate());
alert(gItem.toHTML(gItem));
