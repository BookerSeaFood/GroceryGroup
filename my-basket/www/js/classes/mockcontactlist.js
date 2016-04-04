if (mb == null || typeof(mb) != "object") { var mb = new Object(); }

mb.MockContactList = function() {
	this.contacts = [];
};

mb.MockContactList.prototype.load = function(listName) {
	this.items.push(new Contact());
};

mb.MockContactList.prototype.get = function(i) {
	return this.items[i];
};

mb.MockContactList.prototype.len = function() {
	return this.items.length;
};