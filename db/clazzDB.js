let pool = require('./pool');

module.exports = {
	findAll(){
		let sql = "select * from clazz";
		return pool.execute(sql);
	},
	findById(id){
		let sql = "select * from clazz where id ="+id;
		return pool.execute(sql);
	},
	query(keys){
		let sql = "select * from clazz where name like '%"+keys+"%'";
		return pool.execute(sql);
	},
	save(clazz){
		let sql = "insert into clazz values(null,'"+clazz.name+"','"+clazz.createDate+"','"+clazz.teacher_id+"')";
		return pool.execute(sql);
	},
	update(clazz){
		let sql = "update clazz set name='"+clazz.name+"',createDate='"+clazz.createDate+"',teacher_id='"+clazz.teacher_id+"' where id = "+clazz.id;
		return pool.execute(sql);		
	},
	batchDelete(ids){
		let sql = "delete from clazz where id in ("+ids.join(',')+")";
		return pool.execute(sql);
	}	
}