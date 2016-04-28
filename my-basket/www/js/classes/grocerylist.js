if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

mb.GroceryListItem = function(item) {
	this.name = item.name;
	this.ct = item.ct;
	this.id = item.id;
};

mb.GroceryListItem.prototype.getName = function() {
	return this.name;
};

mb.listItemToHtml = function(that) {
	return '<a class="item' + that.id.toString() + '" href="#editItemPage">' + that.name + ' x' + that.ct.toString() + ' x ' + that.id.toString() + '</a>';
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

mb.GroceryList.prototype.getItem = function(that, itemName) {
	for (i=0; i < that.items.length; i++) {
		if(that.items[i].getName() === itemName) {
			return that.items[i];
		}
	}
};

mb.GroceryList.prototype.edit = function(that, i, item){
	that.items[i].name = item.name;
	that.items[i].ct = item.ct;
};

mb.GroceryList.prototype.getName = function() {
	return this.name;
};

mb.GroceryList.prototype.len = function() {
	return this.items.length;
};

mb.GroceryList.prototype.addItem = function(that, item) {
	that.items.push(new mb.GroceryListItem(item));
};

mb.GroceryList.prototype.removeItem = function(that, itemName) {
	var checksum = 0;
	if (that.items.length === 1) {
		that.items.splice(0);
	}
	for (i=0; i < that.items.length; i++) {
	  	if (that.items[i].getName() === itemName) {
	    	that.items.splice(i, 1);
	    	checksum = 1;
	    }
		if (checksum === 1) {
			that.items[i].id = i;
		}
	}
  	return 0;
};
