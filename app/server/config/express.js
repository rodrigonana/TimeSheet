var express = require('express');
var app = express();
var express_load = require('express-load');
var express_validator = require('express-validator');
var express_session = require('express-session');
var body_parser = require('body-parser');

module.exports = function(){
	app.use(express.static('app/public'));
	app.use(body_parser.urlencoded({extended: true}));
	app.use(body_parser.json());
	app.use(express_validator());
	app.use(express_session({secret: 'XPTO'}));

	express_load('infra',{cwd:'app/server'})
	.then('routes')
	.into(app);
	return app;
}