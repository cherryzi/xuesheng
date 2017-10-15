var mysql = require("mysql");
let pool = global.pool;
if(!pool){
	pool = mysql.createPool({
		database:"web",
		user:"root",
		password:"root"
	});
	global.pool = pool;
}

module.exports = {
	//获取连接
	getConnection(){
		return new Promise(function(resolve,reject){
			pool.getConnection(function(err,connection){
				if(!err){
					resolve(connection);
				}else{
					reject(err);
				}
			});
		});
	},
	//执行sql语句
	execute(sql){
		let _this = this;
		return new Promise(function(resolve,reject){
			let conn;
			_this.getConnection().then(function(connection){
				conn = connection;
				connection.query(sql,function(err,results){
					if(!err){
						resolve(results);
					}else{
						reject(err);
					}
				});
			}).catch(function(error){
				reject(error);
			}).finally(function(){
				if(conn){
					conn.release();
				}
			});
		});
	}
}