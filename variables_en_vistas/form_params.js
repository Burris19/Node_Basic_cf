var http = require('http'),
	fs = require('fs'),
	parser = require('./params_parse.js');

	var p = parser.parse;

http.createServer(function (request, response) {


	if(request.url.indexOf('favicon.ico') > 0 ) { return };

	fs.readFile('./index.html', function (err, html) {

		var html_string = html.toString();		
		var variables = html_string.match(/[^\{\}]+(?=\})/g);		
		var nombre = "";		

		var parametros = p(request);


		for (var i = variables.length - 1; i >= 0; i--) {
			
			var value = variables[i].trim();
			html_string = html_string.replace("{" + variables[i] + "}", parametros[value]);

		}
				
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(html_string);
		response.end();
	});
}).listen(8080);

