function parse(request) {
	var arreglo_parametros = [];
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

	return parametros;

}


module.exports.parse = parse;