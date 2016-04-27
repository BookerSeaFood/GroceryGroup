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
	this.name = name || '_name_';
	this.quantity = quantity || 1;
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
/**
 * Class to contain multiple ListItems
 * @List class constructor
 *
 * TODO:
 * Add more specific List classes with their own attributes that inherit
 * functionality? Perhaps List as is has enough?
 */
// Basic list with associated functionality
mb.List = function(name) {
	this.name = name || '_name_';
	this.content = [];
}

/**
 * Return the name of the List
 * @returns {string} name
 */
// Returns the list object's name
mb.List.prototype.getName = function() {
	return this.name;
}

/**
 * Return the number of ListItems in the List
 * @return {number} length of the List
 */
mb.List.prototype.getLength = function() {
	return this.content.length;
}

/**
 * Adds a new ListItem to the List
 * @param {ListItem} ListItem to be added at the back of the List
 * @returns {number} index where the ListItem was placed in the List
 */
// Adds a ListItem to the List object
mb.List.prototype.addItem = function(item) {
	this.content.push(item);
	return (this.content.length - 1);
};

/**
 * Remove a ListItem specified by name from the List
 * @param {string} name of the Item to be removed (contained in a ListItem)
 * @returns {number} returns 1 if the specified ListItem was removed, 0 if the removal failed
 */
// Search for and remove a ListItem by name
mb.List.prototype.removeItem = function(itemName) {
	for (i=0; i < this.content.length; i++) {
	  	if (this.content[i].getName() === itemName) {
	    	this.content.splice(i, 1);
	    	return 1;
	    }
	}
  	return 0;
}

mb.List.prototype.get = function(i) {
	return this.content[i];
}

/**
 * Returns the ListItem that contains the Item with the specified name (and its related ItemInfo)
 * @param {string} name of the Item to be retrieved
 * @returns {ListItem} ListItem that contains the specified Item
 */
// Search for and return a ListItem by name
mb.List.prototype.getItem = function(itemName) {
	for (i=0; i < this.content.length; i++) {
	  	if (this.content[i].getName() === itemName) {
	    	return this.content[i];
	    }
	}
}

// TODO: Will eventually ping the server for shared lists / local storage for singles
mb.List.prototype.load = function(listName) {

}

/**
 * Loops through the List and prints out its Item and ItemInfo contents in an alert
 */
// Make and alert for each item in the List object
mb.List.prototype.displayItems = function() {
	for (i=0; i < this.content.length; i++) {
	  	alert('Item= ' + this.content[i].getName());
	}
}

mb.listToHTML = function(that) {
	return '<a class="itemList" href="#listPage">' + that.name + '</a>';
}

//==============================================================================
/*
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

var myList = new mb.List('myList');
alert(myList.getName());
alert(myList.getLength());

myList.addItem(gItem);
var item0 = new mb.GroceryItem();
item0.setName('milk');
var item1 = new mb.GroceryItem('mega-lazer', 9000);
myList.addItem(item0);
myList.addItem(item1);
alert(myList.getLength());
myList.displayItems();

myList.removeItem('milk');
alert(myList.getLength());
myList.displayItems();

var mysteryItem = myList.getItem('mega-lazer');
alert(mysteryItem.toHTML(mysteryItem));
*/
