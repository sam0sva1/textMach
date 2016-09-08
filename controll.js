var Storage = require('./storage');
var View = require('./view');

var Controll = function(data, view) {
	this.storage = this.transform(data);
	this.view = new View(this.storage);
	this.dom = this.view.getDom();
};

Controll.prototype.transform = function(data) {

	return storage;
};