var http = require('http');

var driver = function(required, response){
	console.log('Hello word');
	response.end('Hello word');
};

var server = http.createServer(driver);

server.listen(8080);

