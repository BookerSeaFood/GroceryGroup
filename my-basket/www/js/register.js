if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

/**
 * Create a new entry for the user in the users table
 * @param {string} username The user's username
 * @param {string} password The user's password (unencrypted)
 * @param {string} email The user's email adayress
 * @throws {UserAlreadyExistsException} If there is already a user in the database with
 *     the same username oremail as the one entered
 */ 
mb.register = function(username, password, email, database) {
	// Validate input data

	// Generate additional required data
	var toInsert = new Object();

	// Insert provided information
	toInsert.username = username;
	toInsert.email = email;
	toInsert.password = password;

	// Generate an encrypted password
	toInsert.salt = mb.genSalt();
	toInsert.passCrypt = mb.crypt(password, toInsert.salt);

	// Get the current date
	toInsert.today = mb.getToday();

	// Create a UUID for the user
	toInsert.uuid = mb.UUID();
	
	var toInsertJSON = JSON.stringify(toInsert, ['username', 'email', 'password']);
	
	var url = 'localhost';
 
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			document.getElementById("data").innerhtml = "Hi";
		}
    };
    xmlhttp.open("POST","register.php",true);
    xmlhttp.send();
	// Insert all this data into the database
	//database.insert('users', toInsert)
};
