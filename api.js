'use strict';
// var r = require('rethinkdbdash')({
// 	db: 'reguletter'
// });
var await = require('asyncawait/await');
var async = require('asyncawait/async');

var Api = function() {
	this.r = require('rethinkdbdash')({
		db: 'reguletter'
	});

	// this.getTables = function(user) {
	// 	r.tableList().run().then(res => console.log(res));
	// };
};

// Api.prototype.name = function(user) {
// 	r.<>.run().then(res => console.log(res));
// };

Api.prototype.getTables = async (function() {
	return await (this.r.tableList().run());
});

Api.prototype.getTable = function(table) {
	this.r.table(table).run().then(res => console.log(res));
};

//r.db('reguletter').table('users').get('samosval').run().then(res => console.log(res));

module.exports = Api;
