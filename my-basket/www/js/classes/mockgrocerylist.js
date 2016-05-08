if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

//Mock grocery list and grocery list items used for app testing

mb.MockGroceryListItem = function(item) {
	this.name = item.name;
	this.ct = item.ct;
	this.id = item.id;
};

mb.listItemToHtml = function(that) {
	return '<a class="item' + that.id.toString() + '" href="#editItemPage">' + that.name + ' x' + that.ct.toString() + '</a>';
};

////////////////////////////////////////////////////////////////////////////////

mb.MockGroceryList = function(str) {
	this.items = [];
	this.name = str;
};

mb.listToHtml = function(that) {
	return '<a class="itemList" href="#listPage">' + that.name + '</a>';
};


// Will eventually ping the server for shared lists / local storage for singles
mb.MockGroceryList.prototype.load = function(listName) {
	var tobj = new Object();
	tobj.name = '2% fat milk';
	tobj.ct = 1;
	tobj.id = 0;

	var tobj2 = new Object();
	tobj2.name = 'Ricotta cheese';
	tobj2.ct = 3;
	tobj2.id = 1;

	var tobj3 = new Object();
	tobj3.name = 'Pasta sauce';
	tobj3.ct = 2;
	tobj3.id = 2;

	var tobj4 = new Object();
	tobj4.name = 'Box o\' pasta';
	tobj4.ct = 8;
	tobj4.id = 3;

	var tobj5 = new Object();
	tobj5.name = 'Orange crush';
	tobj5.ct = 1;
	tobj5.id = 4;

	this.items.push(new mb.MockGroceryListItem(tobj));
	this.items.push(new mb.MockGroceryListItem(tobj2));
	this.items.push(new mb.MockGroceryListItem(tobj3));
	this.items.push(new mb.MockGroceryListItem(tobj4));
	this.items.push(new mb.MockGroceryListItem(tobj5));
};

mb.MockGroceryList.prototype.get = function(i) {
	return this.items[i];
};

mb.MockGroceryList.prototype.edit = function(that, i, item){
	that.items[i].name = item.name;
	that.items[i].ct = item.ct;
}

mb.MockGroceryList.prototype.len = function() {
	return this.items.length;
};

mb.MockGroceryList.prototype.addItem = function(that, item) {
	that.items.push(new mb.MockGroceryListItem(item));
};
