var mb.MockDatabase = function() {}

mb.MockDatabase.insert(table, fields) {
	//
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
