if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

//Functions to add and remove contacts from a contact list

/**
  * Get the user's profile info from the db and create a contact
  * @param {string} username The user's username
  * @param {number} uuid The user's UUID
  * @throws {Error} error If the contact already exists on either user's contact list,
  * 	throws this exception
  */
mb.addContact = function(firstUser, username, database) {
	//Validate input data
	if (typeof username !== 'string' || typeof firstUser !== 'object' || typeof database !== 'object') {
		return 0;
	}
	//Get other user's profile data
	var secondUser = database.get(username);
	//TODO: possibly add a getUsername/getUUID User function
	uuid = secondUser.uid;
	//Add to 1st user's contact list
	var newCon = new Contact(username, uuid);
	try {
		firstUser.contactList.addItem(newCon);
		newCon.create();
		return true;
	}
	catch(error) {
		return false;
	}
};

mb.removeContact = function(firstUser, username, database) {
	//Validate input data
	if (typeof username !== 'string' || typeof firstUser !== 'object' || typeof database !== 'object') {
		return 0;
	}
	//Attempt to remove given contact
	var err = firstUser.contactList.removeItem(username);
	if (err === 0) {
		return 0;
	}
	return 1;
}