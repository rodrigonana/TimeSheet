module.exports = function(app){

	app.get('/user/:id', function(req, res){
		console.log("------ user:get ------");
	});

	app.get('/user/', function(req, res){
		console.log("------ user:get:list ------");
		var connection = app.infra.connectionFactory();
		var userDAO = new app.infra.UserDAO(connection);
		userDAO.list(function(errors, result ){
			console.log(errors);
			res.format({
				json: function(){
					res.json(result);
				}
			});
		});
	});

	app.post('/user', function(req, res){
		console.log("------ user:post ------");
		var user = req.body;

		req.assert('name', 'Nome é um campo obrigatório').notEmpty();
		req.assert('password', 'Senha é um campo obrigatório').notEmpty();
		req.assert('email', 'E-mail é um campo obrigatório').notEmpty();
		req.assert('email', 'E-mail inválido').isEmail();

		if(req.validationErrors()){
			res.format({
				json: function(){
					res.status(400).json(req.validationErrors());
				}
			});	
			return;
		}


		var connection = app.infra.connectionFactory();
		var userDAO = new app.infra.UserDAO(connection);
		userDAO.save(user,function(errors, result ){
			console.log(errors);
			res.format({
				json: function(){
					res.json(result);
				}
			});
		});
	});	

	app.delete('/user', function(req, res){
		console.log("------ user:delete ------");
	});

/*	
	app.update('/user', function(req, res){
		console.log("------ user:update ------");
	});	
*/
}