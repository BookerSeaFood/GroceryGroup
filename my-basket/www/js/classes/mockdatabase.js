if (mb == null || typeof(mb) != "object") { var mb = new Object(); }

mb.MockDatabase = function() {};

mb.MockDatabase.prototype.insert(table, fields) {
	/**

	for (var key in validation_messages) {
	    // skip loop if the property is from prototype
	    if (!validation_messages.hasOwnProperty(key)) continue;

	    var obj = validation_messages[key];
	    for (var prop in obj) {
	        // skip loop if the property is from prototype
	        if(!obj.hasOwnProperty(prop)) continue;

	        // your code
	        alert(prop + " = " + obj[prop]);
	    }
	}

	*/
};

mb.MockDatabase.prototype.update(table, id, fields) {
	// update ID in TABLE where FIELDS[key] => FIELDS[val]
};

mb.MockDatabase.prototype.delete() {
	//
};

mb.MockDatabse.get() {
	//
};

mb.MockDatabase.prototype.getById() {
	//
};

mb.MockDatabase.prototype.results() {
	return list();
};

mb.MockDatabase.prototype.firstResult() {
	return null;
};

mb.MockDatabase.prototype.getErrors() {
	return list();
};

mb.MockDatabase.prototype.count() {
	return -1;
};
