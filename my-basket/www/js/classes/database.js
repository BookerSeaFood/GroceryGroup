if (mb == null || typeof(mb) != "object") { var mb = new Object(); }

/* @constructor */
mb.Database = function(jq, server) {
	this.jq = jq;
	this.serv_url = server;
	this.timeout = 60000;
};


/**
 * Attempt to insert data into the database
 * @param {string} table Which SQL table to insert the data into
 * @param {object} fields What data to send through the POST request
 */
mb.Database.prototype.insert(table, fields) {
	var settings = new Object();
	settings.type = 'POST';
	settings.url = this.serv_url + 'insert.php';
	settings.timeout = this.timeout;
	settings.table = fields;


	return this.jq.ajax(
		settings
	).done(function(data){
		console.log('Insert success');
	}).fail(function(a, b, c){
		console.log('Insert fail');
	});
};

mb.Database.prototype.update(table, id, fields) {
	// update ID in TABLE where FIELDS[key] => FIELDS[val]
};

mb.Database.prototype.delete() {
	//
};

mb.MockDatabse.get() {
	//
};

mb.Database.prototype.getById() {
	//
};

mb.Database.prototype.results() {
	return list();
};

mb.Database.prototype.firstResult() {
	return null;
};

mb.Database.prototype.getErrors() {
	return list();
};

mb.Database.prototype.count() {
	return -1;
};
