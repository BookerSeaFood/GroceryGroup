if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

mb.ListList = function(id) {
	this._lists = [];
	this.id = id;
};


mb.ListList.prototype.get = function(i) {
	return this._lists[i];
}

mb.ListList.prototype.add = function(ls) {
	this._lists.push(ls);
};

mb.ListList.prototype.lists = function() {
	return this._lists;
};

mb.ListList.prototype.update = function(){
	//
}

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
