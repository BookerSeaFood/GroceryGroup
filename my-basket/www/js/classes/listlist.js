if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

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
	//LocalStorageManager.setTest("617");

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
