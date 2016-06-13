function UserDAO(connection){
	this._connection = connection;
}

UserDAO.prototype.list = function(callback){
	this._connection.query('select * from users', callback);
}

UserDAO.prototype.get = function(id, callback){
	this._connection.query('select * from users where id = ?', id, callback);
}

UserDAO.prototype.save = function(user, callback){
	this._connection.query('insert into users set ?', user, callback);
}

UserDAO.prototype.delete = function(user, callback){
	this._connection.query('', user, callback);
}

UserDAO.prototype.update = function(user, callback){
	this._connection.query('', user, callback);
}

module.exports = function(){
	return UserDAO;
}