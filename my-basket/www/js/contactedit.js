if (mb == null || typeof(mb) != "object") { var mb = new Object(); }

/**
  * Get the user's profile info from the db and create a contact
  * @param {string} username The user's username
  * @param {number} uuid The user's UUID
  * @throws {ContactAlreadyExistsException} If the contact already exists on either user's contact list,
  * 	throws this exception
  */
mb.addContact = function(firstUser, username, database) {
	//Validate input data
	
	//Get other user's profile data
	var secondUser = database.get(username);
	//TODO: possibly add a getProfileData User function
	secondUserProfileData = secondUser.toString();
	//Add to 1st user's contact list
	firstUser.contactList.add(secondUserProfileData);
	database.update()
};

mb.removeContact = function(firstUser, username, database) {
	//Validate input data
	
	//Look for given contact
	for(i = 0; i < firstUser.contactList.length; ++i) {
		if (username === firstUser.contactList[i].profileInfo.getName()) {
			//Remove if found
			delete firstUser.contactList[i];
			database.update();
			return 1;
		}
	}
	return 0;
}