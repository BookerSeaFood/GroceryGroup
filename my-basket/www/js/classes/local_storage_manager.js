if (mb == null || typeof(mb) != "object") { var mb = new Object(); }

mb.SERVER = '127.0.0.1/my-basket/'; // TODO: get a server

mb.fakeStorage = {
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

function mb.LocalStorageManager() {
  this.UserIDKey     = "UserID";
  this.listKey     = "list";

  var supported = this.localStorageSupported();
  this.storage = supported ? window.localStorage : window.fakeStorage;
}

mb.LocalStorageManager.prototype.localStorageSupported = function () {
  var testKey = "test";
  var storage = window.localStorage;

  try {
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } 
  catch (error) {
    return false;
  }
};

// Best score getters/setters
mb.LocalStorageManager.prototype.getUserID = function () {
  return this.storage.getItem(this.UserIDKey) || 0;
};

mb.LocalStorageManager.prototype.setUserID = function (ID) {
  this.storage.setItem(this.UserIDKey, ID);
};

// Game state getters/setters and clearing
mb.LocalStorageManager.prototype.getList = function () {
  var stateJSON = this.storage.getItem(this.listKey);
  return stateJSON ? JSON.parse(stateJSON) : null;
};

mb.LocalStorageManager.prototype.setList = function (theList) {
  this.storage.setItem(this.listKey, JSON.stringify(theList));
};

mb.LocalStorageManager.prototype.clearUserID = function () {
  this.storage.removeItem(this.UserIDKey);
};





