if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

/**
 * Create a new entry for the user in the users table
 * @param {string} username The user's username
 * @param {string} password The user's password (unencrypted)
 * @param {string} email The user's email adayress
 * @throws {UserAlreadyExistsException} If there is already a user in the database with
 *     the same username oremail as the one entered
 */
mb.register = function(username, password, email) {
	// Validate input data

	// Generate additional required data
	var toInsert = new Object();

	// Insert provided information
	toInsert.username = username;
	toInsert.email = email;
	toInsert.password = password;

	var toInsertJSON = JSON.stringify(toInsert, ['username', 'email', 'password']);
	var url = "http://localhost/public_html/register.php";

	var xhr = new XMLHttpRequest(toInsertJSON);
    xhr.onreadystatechange = function() {
		if (this.readyState == 4) {
			alert(this.status);
		}
    };

    xhr.open("POST", url, true);
	xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    xhr.send();
};