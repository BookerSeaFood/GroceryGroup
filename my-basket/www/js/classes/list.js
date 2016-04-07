/**
 *
 */

//==============================================================
// Item object contains static attributes
if (mb == null || typeof(mb) != "object") { var mb = new Object(); }

mb.Item = function(name) {
	this.name = name || '__name__';
};

mb.Item.prototype.getName = function() {
	return this.name;
};

//==============================================================
// ItemInfo object contains changing attributes relating to an Item object
mb.ItemInfo = function(info) {
	this.info = info || '__info__';
};

mb.ItemInfo.prototype.getInfo = function() {
	return this.info;
};

//==============================================================
// ListItems are Item/ItemInfo pairs
mb.ListItem = function(item, itemInfo) {
	this.item = item;
	this.itemInfo = itemInfo;
};

// Item attributes are read-only
mb.ListItem.prototype.getName = function() {
	return this.item.getName();
};

// ItemInfo may need to be updated and so should we return the object itself???
mb.ListItem.prototype.getInfo = function() {
	return this.itemInfo.getInfo();
};

//==============================================================
// Basic list with associated functionality
mb.List = function(name) {
	this.name = name || '__name__';
	this.content = [];
};

// Returns the list object's name
mb.List.prototype.getName = function() {
	return this.name;
};

mb.List.prototype.getLength = function() {
	return this.content.length;
};

// Adds a ListItem to the List object
mb.List.prototype.addItem = function(listItem) {
	this.content.push(listItem);
	return (this.content.length - 1);
};

// Search for and remove a ListItem by name
mb.List.prototype.removeItem = function(itemName) {
	for (i=0; i < this.content.length; i++) {
	  	if (this.content[i].getName() === itemName) {
	    	this.content.splice(i, 1);
	    	return 1;
	    }
	}
  	return 0;
};

// Search for and return a ListItem by name
mb.List.prototype.getItem = function(itemName) {
	for (i=0; i < this.content.length; i++) {
	  	if (this.content[i].getName() === itemName) {
	    	return this.content[i];
	    }
	}
};

// Make and alert for each item in the List object
mb.List.prototype.displayItems = function() {
	for (i=0; i < this.content.length; i++) {
	  	alert('Item= ' + this.content[i].getName() + ' ItemInfo= ' + this.content[i].getInfo());
	}
};
