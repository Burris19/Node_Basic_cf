var http = require('http'),
	fs	= require('fs');

var html = fs.readFileSync('./index.html');

http.createServer(function(req, res){
	fs.readFile('./index.html', function (err, html){
		res.writeHead(200, {'Content-Type': 'application/json'})
		res.write(JSON.stringify({name: 'Julian', username: 'JBurris'}));
		res.end();		
	});
}).listen(8080);