var http = require('http');

var configuration1 = {
	hostname: 'localhost',
	port:3001,
	path:'/users',
	method: 'post',
	headers:{
		'Accept':'application/json',
		'Content-type':'application/json'
	}
};

var configuration2 = {
	hostname: 'localhost',
	port:3001,
	path:'/users',
	headers:{
		'Accept':'application/json',
		'Content-type':'application/json'
	}
};

var configuration3 = {
	hostname: 'localhost',
	port:3001,
	path:'/users/1',
	headers:{
		'Accept':'application/json',
		'Content-type':'application/json'
	}
};

var user = {
	name: 'Rorigo',
	email: 'rodrigo@xpto.com',
	password: 'XsSWeY1f432UB546JdNd8Khb9i5h57ij'
};

http.request(configuration1, function (res) {
	console.log('POST')
	console.log('Status Code:' + res.statusCode);
	res.on('data',function(body){
		console.log('BODY:' + body);
	});
}).end(JSON.stringify(user));

http.get(configuration2, function (res) {
	console.log('GET:LIST')
	console.log('Status Code:' + res.statusCode);
	res.on('data',function(body){
		console.log('BODY:' + body);
	});
});

http.get(configuration3, function (res) {
	console.log('GET')
	console.log('Status Code:' + res.statusCode);
	res.on('data',function(body){
		console.log('BODY:' + body);
	});
});