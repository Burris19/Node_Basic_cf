var express = require('express');
var bodyParser = require('body-parser');
var User = require('./models/user').User;
var app = express();


//Para usar un middleware escribimos la palabra use
app.use('/estatico', express.static('public'));
// app.use(bodyParser.json()); para peticiones application/json
app.use(bodyParser.urlencoded({extended: true})); 
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/login', function (req, res) {
	User.find(function(err, doc){
		console.log(doc);
		res.render('login');
	});
  
});

app.post('/users', function (req, res) {

	var user = new User({
		password: req.body.password,
		email: req.body.email,
		password_confirmation: req.body.password_confirmation
		});

	console.log(user.password_confirmation);

	user.save(function () {
		res.send('Recibimos tus datos');	
	});
	
});

app.listen(8080);

