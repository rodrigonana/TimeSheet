var app = require('./server/config/express')();

app.listen(3001,function(){
	console.log("ok");
});