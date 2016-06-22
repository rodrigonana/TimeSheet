var app = require('./app/server/config/express')();

app.listen(3001,function(){
	console.log('Started ...');
});
