var MockListItem = function(name) {
	this.name = name || '__name__';
}; 

MockListItem.prototype.getName = function() {
	return this.name;
};

var GroceryList = function(name) {
	this.name = name || '__name__';
	this.content = [];
};

GroceryList.prototype.getName = function() {
	return this.name;
};

GroceryList.prototype.addItem = function(itemName) {
	item = new MockListItem(itemName);
	this.content.push(item);
};

GroceryList.prototype.removeItem = function(itemName) {
	for (i=0; i < this.content.length; i++) {
  	if (this.content[i].getName() === itemName) {
    	this.content.splice(i, 1);
    }
  }
};

GroceryList.prototype.displayItems = function() {
	for (i=0; i < this.content.length; i++) {
  	alert(this.content[i].getName());
  }
};

alert('test');
mli = new MockListItem('banana');
alert(mli.getName());

glist = new GroceryList('schindlers list');
alert(glist.getName());
glist.addItem('oatmeal')
alert(glist.content[0].getName());
glist.addItem('milk');
alert(glist.content.length);
glist.addItem('LAZER');
glist.displayItems();
glist.removeItem('oatmeal');
alert(glist.content.length);
