if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

mb.SERVER = '127.0.0.1/my-basket/';

/**@constructor*/
mb.Contact = function(un, id) {
	//Database ID
	this.uid = id || -1;
	
	//Username of the contact
	this.username = un || 'Peter Placeholder';
};


//Add contact to database
mb.Contact.prototype.create = function() {
	DatabaseInterface.add('contacts', this.uid);
};

//Functions to output Contact info
mb.Contact.prototype.getUsername = function() {
	return this.username;
};

mb.Contact.prototype.getUID = function() {
	return this.uid;
};

