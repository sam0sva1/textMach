var express = require('express');
var app = express();

var api = require("./api.js");
var db = new api();

app.use(express.static('static/css'));

var handlebars = require('express-handlebars')
	.create({
		defaultLayout: 'main',
		extname: '.hbs'
	});
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');

app.set('port', process.argv[2] || 3000);

app.get('/', (req, res) => {
	res.render('home');
});

app.listen(app.get('port'), function() {
	console.log(`Server works on ${app.get('port')}.`);
});