var app = require('express')();
var express_load = require('express-load');
var express_validator = require('express-validator');
var body_parser = require('body-parser');

module.exports = function(){
	/*
	app.set('','');
	app.set('','');
	*/
	app.use(body_parser.urlencoded({extended: true}));
	app.use(body_parser.json());
	app.use(express_validator());

	express_load('routes',{cwd:'server'})
	.then('infra')
	.into(app);
	return app;
}