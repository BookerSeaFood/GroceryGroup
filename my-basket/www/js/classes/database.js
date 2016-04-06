if (mb == null || typeof(mb) != "object") { var mb = new Object(); }

<<<<<<< HEAD
window.fakeStorage = {
  _data: {},

  setItem: function (id, val) {
    return this._data[id] = String(val);
  },

  getItem: function (id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },

  removeItem: function (id) {
    return delete this._data[id];
  },

  clear: function () {
    return this._data = {};
  }
};

function LocalStorageManager() {
  this.bestScoreKey     = "bestScore";
  this.gameStateKey     = "gameState";

  var supported = this.localStorageSupported();
  this.storage = supported ? window.localStorage : window.fakeStorage;
}

LocalStorageManager.prototype.localStorageSupported = function () {
  var testKey = "test";
  var storage = window.localStorage;

  try {
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

// Best score getters/setters
LocalStorageManager.prototype.getBestScore = function () {
  return this.storage.getItem(this.bestScoreKey) || 0;
};

LocalStorageManager.prototype.setBestScore = function (score) {
  this.storage.setItem(this.bestScoreKey, score);
};

// Game state getters/setters and clearing
LocalStorageManager.prototype.getGameState = function () {
  var stateJSON = this.storage.getItem(this.gameStateKey);
  return stateJSON ? JSON.parse(stateJSON) : null;
};

LocalStorageManager.prototype.setGameState = function (gameState) {
  this.storage.setItem(this.gameStateKey, JSON.stringify(gameState));
};

LocalStorageManager.prototype.clearGameState = function () {
  this.storage.removeItem(this.gameStateKey);
=======
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
>>>>>>> 434a23387a57a0bcf193eb73a4a07af0d46a46bf
};
