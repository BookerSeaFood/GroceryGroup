/**
 * 
 */

//==============================================================
// Item object contains static attributes 
if (mb == null || typeof(mb) != "object") { var mb = new Object(); }

var Item = function(name) {
	this.name = name || '__name__';
}; 

Item.prototype.getName = function() {
	return this.name;
};

//==============================================================
// ItemInfo object contains changing attributes relating to an Item object
var ItemInfo = function(info) {
	this.info = info || '__info__';
};

ItemInfo.prototype.getInfo = function() {
	return this.info;
};

//==============================================================
// ListItems are Item/ItemInfo pairs
var ListItem = function(item, itemInfo) {
	this.item = item;
	this.itemInfo = itemInfo;
}; 

// Item attributes are read-only
ListItem.prototype.getName = function() {
	return this.item.getName();
};

// ItemInfo may need to be updated and so should we return the object itself???
ListItem.prototype.getInfo = function() {
	return this.itemInfo.getInfo();
};

//==============================================================
// Basic list with associated functionality 
var List = function(name) {
	this.name = name || '__name__';
	this.content = [];
};

// Returns the list object's name
List.prototype.getName = function() {
	return this.name;
};

List.prototype.getLength = function() {
	return this.content.length;
};

// Adds a ListItem to the List object
List.prototype.addItem = function(listItem) {
	this.content.push(listItem);
	return (this.content.length - 1);
};

// Search for and remove a ListItem by name
List.prototype.removeItem = function(itemName) {
	for (i=0; i < this.content.length; i++) {
	  	if (this.content[i].getName() === itemName) {
	    	this.content.splice(i, 1);
	    	return 1;
	    }
	}
  	return 0;
};

// Search for and return a ListItem by name
List.prototype.getItem = function(itemName) {
	for (i=0; i < this.content.length; i++) {
	  	if (this.content[i].getName() === itemName) {
	    	return this.content[i];
	    }
	}
};

// Make and alert for each item in the List object
List.prototype.displayItems = function() {
	for (i=0; i < this.content.length; i++) {
	  	alert('Item= ' + this.content[i].getName() + ' ItemInfo= ' + this.content[i].getInfo());
	}
};

//==============================================================
alert('test');
mli = new Item('mockListItem');
alert(mli.getName());

glist = new List('schindlers list');
alert(glist.getName());
alert(glist.getName() + ' length= ' + glist.getLength());

itemOatmeal = new Item('oatmeal');
infoOatmeal = new ItemInfo(1);
oatmeal = new ListItem(itemOatmeal, infoOatmeal);
alert('Added ' + oatmeal.getName() + ' at index= ' + glist.addItem(oatmeal));

alert(glist.getName() + ' length= ' + glist.getLength());

itemMilk = new Item('milk');
infoMilk = new ItemInfo(1);
milk = new ListItem(itemMilk, infoMilk);
alert('Added ' + milk.getName() + ' at index= ' + glist.addItem(milk));


alert(glist.getName() + ' length= ' + glist.getLength());

alert(glist.getItem('oatmeal').getName());

itemJews = new Item('Jews');
infoJews = new ItemInfo(6000000);
jews = new ListItem(itemJews, infoJews);

alert('Added ' + jews.getName() + ' at index= ' + glist.addItem(jews));

alert(glist.getName() + ' length= ' + glist.getLength());
glist.displayItems();

glist.removeItem('Jews');
alert(glist.getName() + ' length= ' + glist.getLength());
glist.displayItems();
