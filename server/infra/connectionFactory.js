var mysql = require('mysql');

var connectDB = function(){
	return mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'',
		database:'bd01'
	});
}

module.exports = function(){
	return connectDB;
}