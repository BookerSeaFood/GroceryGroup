if (mb == null || typeof(mb) != "object") { var mb = new Object(); }

mb.MockDatabase = function() {};

mb.MockDatabase.prototype.insert(table, fields) {
	//
};

mb.MockDatabase.prototype.update(table, id, fields) {
	// update ID in TABLE where FIELDS[key] => FIELDS[val]
};

mb.MockDatabase.prototype.delete() {
	//
};

mb.MockDatabase.get() {
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
