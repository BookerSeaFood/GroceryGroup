if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

mb.GroceryListItem = function(item) {
	this.name = item.name;
	this.id = item.id;
	this.info = item.info;
};

mb.listItemToHtml = function(that) {
	return '<a class="item' + that.id.toString() + '" href="#editItemPage">' + that.name + ' x' + that.ct.toString() + '</a>';
};

////////////////////////////////////////////////////////////////////////////////

mb.GroceryList = function(str) {
	this.items = [];
	this.name = str;
};

mb.listToHtml = function(that) {
	return '<a class="itemList" href="#listPage">' + that.name + '</a>';
};


// TODO: Will eventually ping the server for shared lists / local storage for singles
mb.GroceryList.prototype.load = function(listName) {

};

mb.GroceryList.prototype.get = function(i) {
	return this.items[i];
};

mb.GroceryList.prototype.edit = function(that, i, item){
	that.items[i].name = item.name;
	that.items[i].ct = item.ct;
}

mb.GroceryList.prototype.len = function() {
	return this.items.length;
};

mb.GroceryList.prototype.addItem = function(that, item) {
	that.items.push(new mb.GroceryListItem(item));
};
