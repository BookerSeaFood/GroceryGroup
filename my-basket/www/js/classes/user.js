if (mb == null || typeof(mb) != "object") { var mb = new Object(); }

mb.SERVER = '127.0.0.1/my-basket/'; // TODO: get a server

/** @constructor */
mb.User = function() {
	// ID in the database (UUID)
	this.uid = -1;

	// Whether the user is currently logged in
	this.isLoggedIn = false;

	// Session identifier (for staring logged in across a single session)
	this.sessionID = -1;

	// Cookie identifier (for staying logged in across multiple sessions)
	this.cookieID = -1;

	// List of this user's contacts
	this.contactList = new MockContactList();

	// List of all grocery lists that this user is a member of
	this.groceryListList = new MockListList();

	// Information regarding this user's profile
	this.profileInfo = new MockUserProfile();

	// Database connection info
	this.db = new MockDatabase();

};

/** TODO
 *
 */
mb.User.prototype.create = function() {
	// Insert this into the database
};

/** TODO
 *
 */
mb.User.prototype.update = function() {
	// Update this entry from the database

};

/**
 * Return whether the user is logged in
 * @return {boolean} Whether the user is currently logged in
 */
mb.User.prototype.exists = function() {
	return this.is_logged_in;
};

/**
 * Log the user in through Google, Facebook, or our system
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
mb.User.prototype.login = function(username, password, method) {
	if (method == 0){
		// our system
	} else if (method == 1){
		// facebook
	} else if (method == 2){
		// google
	}
};

/** TODO
  *
 */
mb.User.prototype.logout = function() {
	// End the current session
};

/** TODO: fix this documentation when profile is finished
 * Return the user's profile in string form
 * @return {string} Whatever information the profile provides from toString()
 */
mb.User.prototype.toString = function() {
	return this.profileInfo.toString();
};
