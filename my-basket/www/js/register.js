if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

//Register function designed to pass a new user to the server

/**
 * Create a new entry for the user in the users table
 * @param {string} username The user's username
 * @param {string} password The user's password (unencrypted)
 * @param {string} email The user's email adayress
 * @throws {UserAlreadyExistsException} If there is already a user in the database with
 *     the same username oremail as the one entered
 */
mb.register = function(username, password, email) {
	// Generate additional required data
	var toInsert = new Object();

	// Insert provided information
	toInsert.username = username;
	toInsert.email = email;
	toInsert.password = password;

	//Parse and attempt to send to server
	var toInsertJSON = JSON.stringify(toInsert, ['username', 'email', 'password']);
	var url = "http://localhost/public_html/register.php";

	function wrap(response) {
		JSON.parse(response);
	};

	var tag = document.createElement("script");
	tag.src = 'register.php?callback=wrap';

	document.getElementsByTagName("head")[0].appendChild(tag);
};