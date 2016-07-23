var http = require('http'),
	fs = require('fs');

http.createServer(function (request, response) {


	if(request.url.indexOf('favicon.ico') > 0 ) { return };

	fs.readFile('./index.html', function (err, html) {

		var html_string = html.toString();
		var arreglo_parametros = [];
		var variables = html_string.match(/[^\{\}]+(?=\})/g);

		console.log(variables);

		var nombre = "";		
		var parametros = {};

		if (request.url.indexOf('?') > 0 ) {			
			var data_url = request.url.split('?');
			arreglo_parametros = data_url[1].split('&');
		}

		for (var i = arreglo_parametros.length - 1; i >= 0; i--) {
			var parametro = arreglo_parametros[i];
			var param_data = parametro.split('=');
			parametros[param_data[0]] = param_data[1];
		}

		for (var i = variables.length - 1; i >= 0; i--) {
			
			var value = variables[i].trim();
			html_string = html_string.replace("{" + variables[i] + "}", parametros[value]);

		}
				
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(html_string);
		response.end();
	});
}).listen(8080);

