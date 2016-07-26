var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/fotos');

var userSchemaJSON = {
	email:String,
	password:String
};

var user_schema = new Schema(userSchemaJSON);

var User = mongoose.model('User', user_schema);

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

	var user = new User({password: req.body.password, email: req.body.email});
	user.save(function () {
		res.send('Recibimos tus datos');	
	});
	
});

app.listen(8080);

