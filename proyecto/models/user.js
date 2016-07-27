var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/fotos');

var posibles_valores = ['M', 'F'];

var user_schema = new Schema({
	name: String,
	username: {type: String, required: 'El username es obligatorio', maxlength: [100, 'No debe ser mayor a 5']},
	password: {type: String, required: 'El password es obligatorio', minlength: [8, 'debe ser mayor a 8 caracteres']},
	age: {type: Number, min: [5, 'la edad no puede ser menor a 5'], max: [100, 'la edad no puede ser mayor a 100']},
	email: {type: String, required: 'El coreo es obligatorio'},
	date_of_birth: Date,
	sex: {type: String, enum: {values : posibles_valores, message: 'opcion no valida'}}

});

user_schema.virtual('password_confirmation').get(function () {
	return this.p_c;
}).set(function(value){
	this.p_c = value;
})




var User = mongoose.model('User', user_schema);

module.exports.User = User;