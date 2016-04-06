if (mb == null || typeof(mb) != "object") { var mb = new Object(); }

mb.MockGroceryListItem = function() {
	//
};

mb.listItemToHtml = function() {
	return '<a href="#">THIS IS A MOCK OBJECT</a>';
};

/////////////////////////////////////////

mb.MockGroceryList = function() {
	this.items = [];
};

mb.MockGroceryList.prototype.load = function(listName) {
	//Will eventually ping the server for shared lists / local storage for singles
	this.items.push(new mb.MockGroceryListItem());
	this.items.push(new mb.MockGroceryListItem());
	this.items.push(new mb.MockGroceryListItem());
	this.items.push(new mb.MockGroceryListItem());
};

mb.MockGroceryList.prototype.get = function(i) {
	return this.items[i];
};

mb.MockGroceryList.prototype.len = function() {
	return this.items.length;
};

mb.MockGroceryList.prototype.addItem = function() {
	this.items.push(new mb.MockGroceryListItem());
	//alert(this.items);
	alert("hi");
};
