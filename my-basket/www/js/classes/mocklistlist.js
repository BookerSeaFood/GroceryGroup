if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

//Mock list of lists used in initial testing
mb.MockListList = function(id) {
	this._lists = [];
	this.id = id;
};

mb.MockListList.prototype.get = function(i) {
	return this._lists[i];
}

mb.MockListList.prototype.add = function(ls) {
	this._lists.push(ls);
};

mb.MockListList.prototype.lists = function() {
	return this._lists;
};

mb.MockListList.prototype.len = function() {
	return this._lists.length;
};

mb.MockListList.listByName = function(that, str) {
	for (var i = 0; i < that._lists.length; i++){
		if (that._lists[i].name === str){
			return that._lists[i];
		}
	}

	return null;
};
