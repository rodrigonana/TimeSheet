module.exports = function(app){
	app.get('/users/:id', function(req, res){
		console.log("------ user:get ------");
		
		var connection = app.infra.connectionFactory();
		var userDAO = new app.infra.UserDAO(connection);
		userDAO.get(req.params.id, function(errors, result ){
			res.format({
				json: function(){
					res.json(result);
				}
			});
		});
	})
	.get('/users/', function(req, res){
		console.log("------ user:get:list ------");
	
		var connection = app.infra.connectionFactory();
		var userDAO = new app.infra.UserDAO(connection);
		
		userDAO.list(function(errors, result ){
			res.format({
				json: function(){
					res.json(result);
				}
			});
		});
	})
	.post('/users', function(req, res){
		console.log("------ user:post ------");

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
		
		userDAO.save(req.body,function(errors, result ){
			res.format({
				json: function(){
					res.json(result);
				}
			});
		});
	})
	.delete('/users/:id', function(req, res){
		console.log("------ user:delete ------");
		var user = req.body;

		var connection = app.infra.connectionFactory();
		var userDAO = new app.infra.UserDAO(connection);

		userDAO.delete(req.params.id,function(errors, result ){
			res.format({
				json: function(){
					res.json(result);
				}
			});
		});

	})
	.put('/users', function(req, res){
		console.log("------ user:update ------");
		var user = req.body;

		var connection = app.infra.connectionFactory();
		var userDAO = new app.infra.UserDAO(connection);
	});	
}