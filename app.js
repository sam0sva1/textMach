var api = require("./api.js");
var db = new api();
//db.getTables();

db.getOneTable('users');

// var userId = 'de53d795-4091-496c-9e5d-e2c9bba2dd4f';
// //var projId = '97f0a8ca-3850-4dd8-a893-bb5248df7cc3';
// var newProject = {
// 	real_name: 'Великие горы',
// 	work_name: 'mountains'
// };
// db.createProject(userId, newProject);

//db.deleteProject(userId, projId).then(res => console.log(res));

// db.createUser(newUser);