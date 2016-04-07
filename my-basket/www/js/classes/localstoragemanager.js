if (mb == null || typeof(mb) != "object") { var mb = new Object(); }

mb.FakeStorage = function() {
	this._data: new Object();
};

mb.FakeStorage.prototype.setItem = function(id, val) {
	return this._data[id] = String(val);
},

mb.FakeStorage.prototype.getItem = function(id) {
	return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
};

mb.FakeStorage.prototype.removeItem = function(id) {
	return delete this._data[id];
};

mb.FakeStorage.prototype.clear = function() {
	return this._data = {};
};

////////////////////////////////////////////////////////////////////////////////

mb.LocalStorageManager = function() {
	this.userIdKey = "userId";
	this.listKey = "list";

	var supported = this.localStorageSupported();
	this.storage = supported ? window.localStorage : window.fakeStorage;
};

mb.LocalStorageManager.prototype.localStorageSupported = function() {
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
mb.LocalStorageManager.prototype.getUserId = function() {
	return this.storage.getItem(this.userIdKey) || 0;
};

mb.LocalStorageManager.prototype.setUserId = function(id) {
	this.storage.setItem(this.userIdKey, id);
};

// Game state getters/setters and clearing
mb.LocalStorageManager.prototype.getList = function() {
	var stateJSON = this.storage.getItem(this.listKey);
	return stateJSON ? JSON.parse(stateJSON) : null;
};

mb.LocalStorageManager.prototype.setList = function(theList) {
	this.storage.setItem(this.listKey, JSON.stringify(theList));
};

mb.LocalStorageManager.prototype.clearuserId = function() {
	this.storage.removeItem(this.userIdKey);
};
