if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

var mb.MockListList = function() {
	this._lists = [];
};

var mb.MockListList.prototype.add(ls) = function() {
	this._lists.push(ls);
};

var mb.MockListList.prototype.lists() = function() {
	return this._lists;
}
