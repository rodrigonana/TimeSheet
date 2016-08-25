module.exports = function(app){
	app.get('/users/signin', function(req, res){
		console.log("------ signin ------");
		var connection = app.infra.connectionFactory();
		var loginDAO = new app.infra.LoginDAO(connection);

		session = req.session;
		session.email="req.body.email";

		loginDAO.login(req.query.email, req.query.password, function(errors, result){
			console.log("erros");
			console.log(errors);
			res.format({
				html: function(){
					console.log("HTML");
					/users/*
					res.render('', {lista: result})
					*/users/
				},
				json: function(){
					console.log("JSON");
					console.log(result);
					res.json(result);
				}
			});
		});
		connection.end();
	});

	app.post('/users/signup', function(req, res){
		session = req.session;
		console.log(session.email);
		console.log("------ signup:post ------");
	});	

	app.get('/users/logout', function(req, res){
		console.log("------ logout ------");
	});

	app.get('/users/lost-password', function(req, res){
		console.log("------ lost-password ------");
	});	

	app.get('/users/reset-password', function(req, res){
		console.log("------ reset-password ------");
	});
}