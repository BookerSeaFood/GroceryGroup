/** @constructor */
var mb.User = function() {
	// ID in the database (UUID)
	this.id = -1;

	// List of this user's contacts
	this.contact_list = new MockContactList();

	// List of all grocery lists that this user is a member of
	this.grocery_list_list = new MockListList();

	// Information regarding this user's profile
	this.user_profile = new MockUserProfile();
}

/**
 * Logs the user in through Google, Facebook, or our system
 * @param {string} username The user's username or email
 * @param {string} password The user's password (only required for login through
 *     our system)
 * @param {int} method Whether the user is logging in with Facebook, Google, or
 *     our system
 *     <ul>
 *     <li> 0: our system
 *     <li> 1: facebook
 *     <li> 2: google
 *     <ul>
 */
mb.User.login(username, password, method){
	if (method == 0){
		// our system
	} else if (method == 1){
		// facebook
	} else if (method == 2){
		// google
	}
}
