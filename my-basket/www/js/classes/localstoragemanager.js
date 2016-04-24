if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

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
	this.userIdKey = 'userId';
	this.listKey = 'list';
	this.check = 'hi';
	
	
   //var supported = this.localStorageSupported();
   this.storage =  window.localStorage;//supported ? window.localStorage : window.fakeStorage;
  
	//this.storage = new FakeStorage;
};

// Best score getters/setters
mb.LocalStorageManager.prototype.getTest = function() {
	return this.storage.getItem(this.check) || 0;
};

mb.LocalStorageManager.prototype.setTest = function(id) {
	this.storage.setItem(this.check, id);
};

mb.LocalStorageManager.prototype.getUserId = function() {
	return this.storage.getItem(this.userIdKey) || 0;
};

mb.LocalStorageManager.prototype.setUserId = function(id) {
	this.storage.setItem(this.userIdKey, id);
};

// Game state getters/setters and clearing
mb.LocalStorageManager.prototype.getList = function() {
	//var stateJSON = this.storage.getItem(this.listKey);
	//return stateJSON ? JSON.parse(stateJSON) : null;
	return storage.getArray(listKey) || [];
};

mb.LocalStorageManager.prototype.setList = function(theList) {
	//this.storage.setItem(this.listKey, JSON.stringify(theList));
	this.storage.setArray(this.listKey, theList);
};

mb.LocalStorageManager.prototype.clearuserId = function() {
	this.storage.removeItem(this.userIdKey);
};
