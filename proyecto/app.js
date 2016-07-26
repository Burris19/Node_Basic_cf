var express = require("express");

var app = express();

//Para usar un middleware escribimos la palabra use
app.use('/estatico', express.static('public'));
app.use(express.static('assets'));

app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/login', function (req, res) {
  res.render('login');
});

app.listen(8080);
