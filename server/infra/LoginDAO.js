function LoginDAO(connection){
	this._connection = connection;
}

LoginDAO.prototype.list = function(callback){
	this._connection.query('select * from users', callback);
}

module.exports = function(){
	return LoginDAO;
}


/*
create table users(
  id int NOT NULL PRIMARY KEY,
  name varchar(255),
  email varchar(255),
  `password` varchar(255)
)

INSERT INTO users VALUES(1, 'Rodrigo', 'rodrigo@spto.com', 'eJHBKJNKLnkjweFASnJ43BH34U6bTv3cNs');
*/