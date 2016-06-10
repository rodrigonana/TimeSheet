var http = require('http');
var configurations = {
	hostname: 'localhost',
	port:3001,
	path:'/signup',
	headers:{
		'Accept':'application/json'
	}
};

http.get(configurations, function (res) {
	console.log('Status Code:' + res.statusCode);
	res.on('data',function(body){
		console.log('BODY:' + body);
	});
});