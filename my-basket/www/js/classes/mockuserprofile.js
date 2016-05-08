if (mb == null || typeof(mb) != 'object') { var mb = new Object(); }

//Mock user profile used in testing
mb.MockUserProfile = function() {};

mb.MockUserProfile.prototype.getName = function() {
	return '';
};
