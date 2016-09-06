module.exports = function(app){
	app.get('/api/users/signin', function(req, res){
		console.log("------ signin ------");
		var connection = app.infra.connectionFactory();
		var loginDAO = new app.infra.LoginDAO(connection);

		session = req.session;
		session.email="req.body.email";

		loginDAO.login(req.query.email, req.query.password, function(errors, result){
			res.format({
				html: function(){
					res.render('', {lista: result});
				},
				json: function(){
					res.json(result[0]);
				}
			});
		});
		connection.end();
	});

	app.post('/api/users/signup', function(req, res){
		session = req.session;
		console.log(session.email);
		console.log("------ signup:post ------");
	});	

	app.get('/api/users/logout', function(req, res){
		console.log("------ logout ------");
	});

	app.get('/api/users/lost-password', function(req, res){
		console.log("------ lost-password ------");
	});	

	app.get('/api/users/reset-password', function(req, res){
		console.log("------ reset-password ------");
	});
}