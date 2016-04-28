if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

mb.ListList = function(id) {
	this._lists = [];
	this.id = id;
	/*
	if (localStorage.getItem("checklist") == 26){
		var stateJSON = localStorage.getItem("list");
		this._lists = stateJSON ? JSON.parse(stateJSON) : null;
		this.id = id;
	} else {
	*/
	//localStorage.setItem("checklist", 26);
};


mb.ListList.prototype.get = function(i) {
	return this._lists[i];
	//return LocalStorageManager.getList();

	//var stateJSON = this.storage.getItem(this.listKey);
	//return stateJSON ? JSON.parse(stateJSON) : null;


}

mb.ListList.prototype.add = function(ls) {
	this._lists.push(ls);


	//localStorage.setItem("list", JSON.stringify(this._lists));
};

mb.ListList.prototype.lists = function() {
	return this._lists;
	//return LocalStorageManager.getList();
};

mb.ListList.prototype.update = function(){
	//localStorage.setItem("list", JSON.stringify(this._lists));
}

mb.ListList.prototype.len = function() {
	return this._lists.length;
};

mb.ListList.prototype.removeList = function(that, listName) {
	var checksum = 0;
	//Possible remove later, could be redundant
	if (that._lists.length === 1) {
		that._lists.splice(0);
	}
	for (i=0; i < that._lists.length; i++) {
	  	if (that._lists[i].getName() === listName) {
	    	that._lists.splice(i, 1);
	    	checksum = 1;
	    }
		if (checksum === 1 && i !== that._lists.length) {
			that._lists[i].id = i;
		}
	}
  	return 0;
};

mb.ListList.listByName = function(that, str) {
	for (var i = 0; i < that._lists.length; i++){
		if (that._lists[i].name === str){
			return that._lists[i];
		}
	}

	return null;
};
