var mb.MockDatabase = function() {}

mb.MockDatabase.insert(table, fields) {
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
}

mb.MockDatabase.update(table, id, fields) {
	// update ID in TABLE where FIELDS[key] => FIELDS[val]
}

mb.MockDatabase.delete() {
	//
}

mb.MockDatabse.get() {
	//
}

mb.MockDatabase.getById() {

}

mb.MockDatabase.results() {
	return list();
}

mb.MockDatabase.firstResult() {
	return null;
}

mb.MockDatabase.getErrors() {
	return list();
}

mb.MockDatabase.count() {
	return -1;
}
