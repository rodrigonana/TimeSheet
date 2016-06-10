var app = require('express')();
var express_load = require('express-load');
var body_parser = require('body-parser');

module.exports = function(){
	/*
	app.set('','');
	app.set('','');
	*/
	app.use(body_parser.urlencoded({extends: true}));

	express_load('routes',{cwd:'server'})
	.then('infra')
	.into(app);
	return app;
}