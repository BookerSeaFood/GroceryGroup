if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

mb.ContactList = function() {
	this.contacts = [];
};

//Add a Contact to the list
mb.ContactList.prototype.addItem = function(con) {
	this.contacts.push(con);
	return (this.contacts.length - 1);
};

// Search for and remove a Contact by name
mb.ContactList.prototype.removeItem = function(contactName) {
	for (i=0; i < this.contacts.length; i++) {
	  	if (this.contacts[i].getName() === contactName) {
	    	this.contacts.splice(i, 1);
	    	return 1;
	    }
	}
  	return 0;
};

mb.ContactList.prototype.displayContacts = function() {
	for (i=0; i < this.contacts.length; i++) {
	  	alert('Username= ' + this.contacts[i].getName());
	}
};

//Functions to output Contact info of a specific contact and ContactList length
mb.ContactList.prototype.getName = function(i) {
	return this.contacts[i].getUsername();
};

mb.ContactList.prototype.getUID = function(i) {
	return this.contacts[i].getUID();
};

mb.ContactList.prototype.len = function() {
	return this.contacts.length;
};