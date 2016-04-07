/**
 * 
 */

if (mb == null || typeof(mb) != "object") { var mb = new Object(); }

/**
 * Class to represent static attributes of an Item
 * @Item class constructor
 * 
 * TODO:
 * Add more specific Item classes with their own attributes that inherit
 * functionality  
 */ 
mb.Item = function(name) {
	this.name = name || '__name__';
}; 

/**
 *  Return the name of the Item
 *  @return {string} name
 */
mb.Item.prototype.getName = function() {
	return this.name;
};

//==============================================================
// ItemInfo object contains changing attributes relating to an Item object
/**
 * Class to represent the dynamic/changing data associated with an Item
 * @ItemInfo class constructor
 * 
 * TODO:
 * Add more specific ItemInfo classes with their own attributes that inherit
 * functionality   
 */
mb.ItemInfo = function(info) {
	this.info = info || '__info__';
};

/**
 * Return the information contained by ItemInfo
 * @returns {unspecified_type} info
 */
mb.ItemInfo.prototype.getInfo = function() {
	return this.info;
};

//==============================================================

/**
 * Class to contain an Item/ItemInfo pair
 * @ListItem class constructor
 */
//ListItems are Item/ItemInfo pairs
mb.ListItem = function(item, itemInfo) {
	this.item = item;
	this.itemInfo = itemInfo;
}; 

/**
 * Return the name of the Item contained by the ListItem
 * @returns {string} name of Item
 */
// Item attributes are read-only
mb.ListItem.prototype.getName = function() {
	return this.item.getName();
};

/**
 * Return the information of the ItemInfo contained by the ListItem
 * @returns {unspecified_type} info
 * 
 * TODO:
 * Since ItemInfo is to contain information that will potentially be updated
 * regularly (as opposed to Item which shouldn't be touched) perhaps this
 * should instead return the ItemInfo object itself instead of just its info?
 */
mb.ListItem.prototype.getInfo = function() {
	return this.itemInfo.getInfo();
};

//==============================================================
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
	this.name = name || '__name__';
	this.content = [];
};

/**
 * Return the name of the List
 * @returns {string} name
 */
// Returns the list object's name
mb.List.prototype.getName = function() {
	return this.name;
};

/**
 * Return the number of ListItems in the List
 * @return {number} length of the List
 */
mb.List.prototype.getLength = function() {
	return this.content.length;
};

/**
 * Adds a new ListItem to the List
 * @param {ListItem} ListItem to be added at the back of the List
 * @returns {number} index where the ListItem was placed in the List
 */
// Adds a ListItem to the List object
mb.List.prototype.addItem = function(listItem) {
	this.content.push(listItem);
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
};

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
};

/**
 * Loops through the List and prints out its Item and ItemInfo contents in an alert
 */
// Make and alert for each item in the List object
mb.List.prototype.displayItems = function() {
	for (i=0; i < this.content.length; i++) {
	  	alert('Item= ' + this.content[i].getName() + ' ItemInfo= ' + this.content[i].getInfo());
	}
};

//==============================================================
alert('test');
mli = new mb.Item('mockListItem');
alert(mli.getName());

glist = new mb.List('schindlers list');
alert(glist.getName());
alert(glist.getName() + ' length= ' + glist.getLength());

itemOatmeal = new mb.Item('oatmeal');
infoOatmeal = new mb.ItemInfo(1);
oatmeal = new mb.ListItem(itemOatmeal, infoOatmeal);
alert('Added ' + oatmeal.getName() + ' at index= ' + glist.addItem(oatmeal));

alert(glist.getName() + ' length= ' + glist.getLength());

itemMilk = new mb.Item('milk');
infoMilk = new mb.ItemInfo(1);
milk = new mb.ListItem(itemMilk, infoMilk);
alert('Added ' + milk.getName() + ' at index= ' + glist.addItem(milk));


alert(glist.getName() + ' length= ' + glist.getLength());

alert(glist.getItem('oatmeal').getName());

itemJews = new mb.Item('Jews');
infoJews = new mb.ItemInfo(6000000);
jews = new mb.ListItem(itemJews, infoJews);

alert('Added ' + jews.getName() + ' at index= ' + glist.addItem(jews));

alert(glist.getName() + ' length= ' + glist.getLength());
glist.displayItems();

glist.removeItem('Jews');
alert(glist.getName() + ' length= ' + glist.getLength());
glist.displayItems();
