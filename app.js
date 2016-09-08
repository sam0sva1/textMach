var api = require("./api.js");
var db = new api();
//db.getTables();

//db.getTable('users');

// var userId = 'de53d795-4091-496c-9e5d-e2c9bba2dd4f';
// var newProject = {
// 	real_name: 'New adventure',
// 	work_name: 'advent'
// };
// db.createProject(userId, newProject);

db.deleteProject('fadflkjaf', 'asfoiafoh').then(res => console.log(res));

// db.createUser(newUser);