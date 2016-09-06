module.exports = function(app){
	app.get('api/users/:id', function(req, res){
		console.log("------ user:get ------");
		
		var connection = app.infra.connectionFactory();
		var userDAO = new app.infra.UserDAO(connection);
		userDAO.get(req.params.id, function(errors, result ){
			console.log('errors: ' + errors);
			res.format({
				json: function(){
					res.json(result);
				}
			});
		});
	})
	.get('api/users/', function(req, res){
		console.log("------ user:get:list ------");
	
		var connection = app.infra.connectionFactory();
		var userDAO = new app.infra.UserDAO(connection);
		
		userDAO.list(function(errors, result ){
			console.log('errors: ' + errors);
			res.format({
				json: function(){
					res.json(result);
				}
			});
		});
	})
	.post('api/users', function(req, res){
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
			console.log('errors: ' + errors);
			res.format({
				json: function(){
					res.json(result);
				}
			});
		});
	})
	.delete('api/users/:id', function(req, res){
		console.log("------ user:delete ------");
		var user = req.body;

		var connection = app.infra.connectionFactory();
		var userDAO = new app.infra.UserDAO(connection);

		userDAO.delete(req.params.id,function(errors, result ){
			console.log('errors: ' + errors);
			res.format({
				json: function(){
					res.json(result);
				}
			});
		});

	})
	.put('api/users', function(req, res){
		console.log("------ user:update ------");
		var user = req.body;

		var connection = app.infra.connectionFactory();
		var userDAO = new app.infra.UserDAO(connection);
		userDAO.update(req.params.id,function(errors, result ){
			console.log('errors: ' + errors);
			res.format({
				json: function(){
					res.json(result);
				}
			});
		});
	});	
}