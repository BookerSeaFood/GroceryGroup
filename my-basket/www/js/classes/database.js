if (mb == null || typeof(mb) != "object") { var mb = new Object(); }

/** @constructor */
mb.Database = function(jq, server) {
	this.jq = jq;
	this.serv_url = server;
	this.timeout = 60000;
};

mb.Database.prototype.query = function(type, table, fields) {
	var settings = new Object();
	settings.type = 'POST';
	settings.url = this.serv_url + type + table + '.php';
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

/**
 * Attempt to insert data into the database
 * @param {string} table Which SQL table to insert the data into (use singular
 *            form e.g. "user" not "users")
 * @param {object} fields What data to send through the POST request
 */
 mb.Database.prototype.add = function(table, fields) {
	 this.query('add-', table, fields);
 };

 /**
  * Attempt to edit data in the databse
  * @param {string} table Which SQL table to edit the data in (use singular
  *            form e.g. "user" not "users")
  * @param {object} fields What data to send through the POST request
  */
mb.Database.prototype.edit = function(table, fields) {
	this.query('edit-', table, fields);
};

/**
 * Attempt to remove an item (row) from the database
 * @param {string} table Which SQL table to remove the row from (use singular
 *            form e.g. "user" not "users")
 * @param {number} id Id of the item to be removed
 */
mb.Database.prototype.remove = function(table, id) {
	var fields = new Object();
	fields.id = id;
	this.query('remove-', table, fields);
};
