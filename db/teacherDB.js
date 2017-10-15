let pool = require('./pool');

module.exports={
	findAll(){
		var sql = "select * from teacher";
		return pool.execute(sql);
	},
	findById(id){
		var sql = "select *from teacher where id =" +id;
		return pool.execute(sql);
	},
	query(keys){
		var sql = "select * from teacher where name like '%"+keys+"%'";
		return pool.execute(sql);
	},
	save(teacher){
		var sql = "insert into teacher values(null,'"
		+teacher.name+"','"
		+teacher.telephone+"')";
		return pool.execute(sql);
	},
	update(teacher){
		var sql = "update teacher set name = '"
		+teacher.name+"',telephone = '"
		+teacher.telephone+"' where id = "
		+teacher.id;
		return pool.execute(sql);
	},
	batchDelete(ids){
		var sql = "delete from teacher where id in ("+ids.join(',')+")";
		return pool.execute(sql);
	}
}