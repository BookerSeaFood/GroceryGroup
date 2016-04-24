if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

mb.LocalStorageManager = function() {
	this.userIdKey = 'userId';
	this.listKey = 'list';
	this.check = 'hi';
}
// Best score getters/setters
mb.LocalStorageManager.prototype.getTest = function() {
	return this.localStorage.getItem(this.check) || 0;
};

mb.LocalStorageManager.prototype.setTest = function(id) {
	this.localStorage.setItem(this.check, id);
};

mb.LocalStorageManager.prototype.getUserId = function() {
	return this.localStorage.getItem(this.userIdKey) || 0;
};

mb.LocalStorageManager.prototype.setUserId = function(id) {
	this.localStorage.setItem(this.userIdKey, id);
};

// Game state getters/setters and clearing
mb.LocalStorageManager.prototype.getList = function() {
	var stateJSON = this.storage.getItem(this.listKey);
	return stateJSON ? JSON.parse(stateJSON) : null;
	//return localStorage.getArray(listKey) ;
};

mb.LocalStorageManager.prototype.setList = function(theList) {
	this.storage.setItem(this.listKey, JSON.stringify(theList));
	//this.localStorage.setArray(this.listKey, theList);
};

mb.LocalStorageManager.prototype.clearuserId = function() {
	this.localStorage.removeItem(this.userIdKey);
};

mb.ListList = function(id) {
	//if(LocalStorageManager.getTest == "617"){
		//this._lists = LocalStorageManager.getList();//[];
		this._lists = [];
		this.id = id;
	//}else{
		//this._lists = [];
		//this._lists = LocalStorageManager.getList() || [];//[];
		//this.id = id;
	//}
	
};

mb.ListList.prototype.get = function(i) {
	return this._lists[i];
	//return LocalStorageManager.getList();
}

mb.ListList.prototype.add = function(ls) {
	this._lists.push(ls);
	//LocalStorageManager.setList(this._lists);//[];
	//mb.LocalStorageManager.setTest("617");

	};

mb.ListList.prototype.lists = function() {
	return this._lists;
	//return LocalStorageManager.getList();
};

mb.ListList.prototype.len = function() {
	return this._lists.length;
};

mb.ListList.listByName = function(that, str) {
	for (var i = 0; i < that._lists.length; i++){
		if (that._lists[i].name === str){
			return that._lists[i];
		}
	}

	return null;
};
