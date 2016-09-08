'use strict';

var View = function(storage) {
	this.project = storage;
	this.pathHolder = [];

	this.dom.sidebar = document.getElementById('sidebar');
	this.dom.path = document.getElementById('path');
	this.dom.holder = document.getElementById('holder');
};

View.prototype.getDom = function() {
	return this.dom;
};

View.prototype.build = function() {
	this.buildPath();
  	this.buildSidebar();
  	this.dom.holder.innerHTML = this.project.complit();
  	this.dom.holder.setAttribute('data-inner', 'Base');
};

View.prototype.buildSidebar = function(route) {
  	var name = route || 'Base';
  	var tags = project[name].listInc();
  	var self = this;

  	this.dom.sidebar.innerHTML = '';
  	tags.forEach(function(elem) {
    	self.dom.sidebar.innerHTML += 
    	"<div data-name='" + 
    	elem + 
    	"'class='sidebar__elem'>" + 
    	elem + 
    	" </div>";
  	});
};

View.prototype.buildPath = function(route) {
  var name = route || 'Base';
  var position = this.pathHolder.indexOf(name);
  var self = this;

  if(position === -1) {
    this.pathHolder.push(name);
  } else {
    this.pathHolder.splice(position+1);
  }
  this.dom.path.innerHTML = '';
  this.pathHolder.forEach(function(elem) {
    self.dom.path.innerHTML += "<span data-name='" + elem + "'class='path__elem'>" + elem + " </span>";
  });
};