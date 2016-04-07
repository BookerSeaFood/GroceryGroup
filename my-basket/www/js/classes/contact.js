if (mb == null || typeof(mb) != "object") { var mb = new Object(); }

mb.SERVER = '127.0.0.1/my-basket/';

/**@constructor*/
mb.Contact = function(un, id) {
	//Database ID
	this.uid = id || -1;
	
	//Username of the contact
	this.username = un || 'Peter Placeholder';
};


//TODO: implement create function for inserting into ContactLists
mb.Contact.prototype.create = function() {
	DatabaseInterface.add('contacts', this.uid);
};

mb.Contact.prototype.getUsername = function() {
	return this.username;
};

mb.Contact.prototype.getUID = function() {
	return this.uid;
};

