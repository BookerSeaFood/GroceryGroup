if (mb == null || typeof(mb) != "object") { var mb = new Object(); }

//General functions designed to be used by all functions

/**
 * @return {string} Today's date in mm/dd/yyyy format
 */
mb.getToday = function() {
	var today = new Date();
	var day = today.getDate();
	var month = today.getMonth() + 1; // Want January to be 1, not 0, etc.
	var year = today.getFullYear();

	if(day<10) {
	    day = '0' + day;
	}

	if(month<10) {
	    month = '0' + month;
	}

	today = month + '/' + day + '/' + year;
	return today;
};

/** TODO
 * @return {string} Randomly generated UUID
 */
mb.getUUID = function() {
	return -1;
};

/** TODO
 * @param {int} len Length of the salt to generate
 * @return {string} Randomly generated string of the specified character length
 */
mb.genSalt = function(len) {
	var alphabet = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBN1234567890!@#$%^&*()_+-=[]{}|;:,.<>/?`~';
	var rand; var out;
	for (var i = 0; i < len; i++){
		rand = Math.floor(Math.random() * alphabet.length);
		out += alphabet[rand];
	}

	return out;
};

/** TODO
 * @param {string} str The string to be encrypted
 * @param {string} salt The salt to be thrown into encryption
 * @return {string} The encrypted string
 */
mb.crypt = function(str, salt) {
	var toEncrypt = str + salt;
	// TODO: actually encrypt this
	return toEncrypt;
};
