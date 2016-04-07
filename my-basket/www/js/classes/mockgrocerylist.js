if (mb == null || typeof(mb) != "object") { var mb = new Object(); }

mb.MockGroceryListItem = function(item) {
	this.name = item.name;
	this.ct = item.ct;
};

mb.listItemToHtml = function(that) {
	return '<a href="#">  MOCK OBJECT </a>';
};

/////////////////////////////////////////

mb.MockGroceryList = function() {
	this.items = [];
};

mb.MockGroceryList.prototype.load = function(listName) {
	//Will eventually ping the server for shared lists / local storage for singles

	var tobj = new Object();
	tobj.name = 'milk';
	tobj.ct = 1;

	this.items.push(new mb.MockGroceryListItem(tobj));
	this.items.push(new mb.MockGroceryListItem(tobj));
	this.items.push(new mb.MockGroceryListItem(tobj));
	this.items.push(new mb.MockGroceryListItem(tobj));
};

mb.MockGroceryList.prototype.get = function(i) {
	return this.items[i];
};

mb.MockGroceryList.prototype.len = function() {
	return this.items.length;
};

mb.MockGroceryList.prototype.addItem = function(that, item) {
	that.items.push(new mb.MockGroceryListItem(item));
};
