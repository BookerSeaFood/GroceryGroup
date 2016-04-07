if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

mb.MockUserProfile = function() {};

mb.MockUserProfile.prototype.getName = function() {
	return '';
};
