if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

//GroceryListItem: Handles storing and accessing the item's name and quantity desired (high cohesion)
//Each GroceryList accesses it's own variables, returning to others through functions (low coupling)

mb.GroceryListItem = function(item) {
	this.name = item.name;
	this.ct = item.ct;
	this.id = item.id;
};

//Function used to hide member variables from users (data encapsulation)
mb.GroceryListItem.prototype.getName = function() {
	return this.name;
};

mb.listItemToHtml = function(that) {
	return '<a class="item' + that.id.toString() + '" href="#editItemPage">' + that.name + ' x' + that.ct.toString() + '</a>';
};

////////////////////////////////////////////////////////////////////////////////

//GroceryList: Handles storing and accessing the items it has access to (high cohesion)
//Each GroceryList accesses it's own variables, returning to others through functions (low coupling)

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

//Functions used to hide member variables from users (data encapsulation)
mb.GroceryList.prototype.getName = function() {
	return this.name;
};

mb.GroceryList.prototype.len = function() {
	return this.items.length;
};


//Functions for removing and adding items
mb.GroceryList.prototype.addItem = function(that, item) {
	for (i=0; i < that.items.length; ++i) {
		if (that.items[i].getName() === item.name) {
			var num = parseInt(that.items[i].ct);
			num += parseInt(item.ct);
			that.items[i].ct = num;
			return;
		}
	}
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
		if (checksum === 1 && i !== that.items.length) {
			that.items[i].id = i;
		}
	}
  	return 0;
};
