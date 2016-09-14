'use strict';
// var r = require('rethinkdbdash')({
// 	db: 'reguletter'
// });
var await = require('asyncawait/await');
var async = require('asyncawait/async');

var Api = function() {
	this.r = require('rethinkdbdash')({
		host: 'localhost',
		port: 28015,
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
	var tables = await ( this.r.tableList().run() );
	console.log(tables);
});

Api.prototype.getOneTable = async (function(table) {
	var result = await( this.r.table(table).run() );
	console.log(result);
});

Api.prototype.createUser = async (function(user) {
	var proto = {
		nickname: user.nickname,
		password: user.password,
		email: user.email,
		projects: []
	};
	var result = await( this.r.table('users').insert(proto).run() );
	console.log(result);
});

//Возвращает ключ, если пользователь существует
Api.prototype.checkUser = async (function(user) {

});

//Обновление данных пользователя
Api.prototype.updateUser = async (function(user) {

});

//Возвращает информацию о пользователе
Api.prototype.getUser = async (function(userId) {
	var user = await( this.r.table('users').get(userId).insert(proto).run() );
	console.log(user);
});

//Создание проета в таблице 'projects'
//и размещение ключа созданного проекта в поле 'projects' таблицы 'users'
Api.prototype.createProject = async( function(userId, data) {
	var project = {
		real_name: data.real_name,
		work_name: data.work_name,
		state: 'live',
		notes: [
			{
				name: 'Base',
				content: '_NEW_NOTE_'
			}
		]
	};
	var result = await( this.r.table('projects').insert(project).run() );
	var projectKey = result.generated_keys[0];

	var projRefer = {
		real_name: data.real_name,
		work_name: data.work_name,
		_id: projectKey
	};
	var res = await( this.r.table('users').get(userId)
		.update(
			{projects: this.r.row('projects').append(projRefer)}
		).run() );
});

Api.prototype.getProject = async( function(projId) {
	
});

//Удаление проекта: сначала удаляется проект из таблицы 'projects',
//а затем уже соответствующий проект удаляется из таблцы 'users'
Api.prototype.deleteProject = async( function(userId, projectId) {
	var projDeleteState = await( this.r
		.table('users')
		.get(userId)
		.update({projects: 
			this.r.row('projects')
			.filter(it => it('_id').eq(projectId).not())
		})
		.run());

	var referDeleteState = await( this.r
		.table('projects')
		.get(projectId)
		.update({state: "dead"}, {durability: "soft"})
		.run());

	return (projDeleteState.deleted !== '0' ? 'Проект удален. ' : 'Не удалось удалить объект. ') + (referDeleteState.deleted !== '0' ? 'И ссылка на него.' : '')
});

Api.prototype.simp = async( function() {
	var res = await( this.r.table('buter').run().then(res => res) );
	console.log('res', res);
});

//r.db('reguletter').table('users').get('samosval').run().then(res => console.log(res));

module.exports = Api;
