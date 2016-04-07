if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

mb.MockGroceryListItem = function(item) {
	this.name = item.name;
	this.ct = item.ct;
};

mb.listItemToHtml = function(that) {
	return '<a href="#">' + that.name + ' x' + that.ct.toString() + '</a>';
};

////////////////////////////////////////////////////////////////////////////////

mb.MockGroceryList = function() {
	this.items = [];
};

// Will eventually ping the server for shared lists / local storage for singles
mb.MockGroceryList.prototype.load = function(listName) {
	var tobj = new Object();
	tobj.name = '2% fat milk';
	tobj.ct = 1;

	var tobj2 = new Object();
	tobj2.name = 'ricotta cheese';
	tobj2.ct = 3;

	var tobj3 = new Object();
	tobj3.name = 'pasta sauce';
	tobj3.ct = 2;

	var tobj4 = new Object();
	tobj4.name = 'box o\' pasta';
	tobj4.ct = 8;

	var tobj5 = new Object();
	tobj5.name = 'orange crush';
	tobj5.ct = 1;

	this.items.push(new mb.MockGroceryListItem(tobj));
	this.items.push(new mb.MockGroceryListItem(tobj2));
	this.items.push(new mb.MockGroceryListItem(tobj3));
	this.items.push(new mb.MockGroceryListItem(tobj4));
	this.items.push(new mb.MockGroceryListItem(tobj5));
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
