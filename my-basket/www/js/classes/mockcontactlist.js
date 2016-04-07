if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

mb.listItemToHtml = function(that) {
	return '<a href="#">' + this.username + ' x' +  '</a>';
};

mb.MockContactList = function() {
	this.contacts = [];
};

mb.MockContactList.prototype.addItem = function(con) {
	this.contacts.push(con);
	return (this.contacts.length - 1);
};

// Search for and remove a ListItem by name
mb.MockContactList.prototype.removeItem = function(contactName) {
	for (i=0; i < this.contacts.length; i++) {
	  	if (this.contacts[i].getName() === contactName) {
	    	this.contacts.splice(i, 1);
	    	return 1;
	    }
	}
  	return 0;
};

mb.MockContactList.prototype.load = function(listName) {
	//Will eventually ping the server for shared lists / local storage for singles
	this.contacts.push(new Contact('Julius',5));
	this.contacts.push(new Contact('Julius',5));
	this.contacts.push(new Contact('Julius',5));
	this.contacts.push(new Contact('Julius',5));
};

mb.MockContactList.prototype.displayContacts = function() {
	for (i=0; i < this.contacts.length; i++) {
	  	alert('Username= ' + this.contacts[i].getName());
	}
};

mb.MockContactList.prototype.getName() = function(i) {
	return this.items[i].getUsername();
};

mb.MockContactList.prototype.getUID() = function(i) {
	return this.items[i].getUID();
};

mb.MockContactList.prototype.len = function() {
	return this.items.length;
};