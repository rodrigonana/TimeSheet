var mysql = require('mysql');

var connectDB = function(){
	console.log('Entrou');
	return mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'abc123',
		database:'bd01'
	});
}

module.exports = function(){
	return connectDB;
}