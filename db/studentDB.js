let pool = require("./pool");

module.exports = {
	//查询所有
	findAll(){
		let sql = "select * from student"
		return pool.execute(sql);
		// let promise = pool.execute(sql);
		// return promise;
	},

	// 通过id查询
	findById(id){
		let sql = "select * from student where id="+id;
		return pool.execute(sql);
	},

	//模糊查询
	query(keys){
		let sql = "select * from student where name like '%"+keys+"%' or gender like '%"+keys+"%'"
		return pool.execute(sql);
	},

	//保存
	save(student){
		let sql = "insert into student values(null,'"+student.name+"','"+student.gender+"','"+student.birth+"',"+student.clazz_id+")";
		return pool.execute(sql);
	},

	//删除
	batchDelete(ids){
		let sql = "delete from student where id in ("+ids.join(',')+")";
		return pool.execute(sql);
	},

	//修改
	update(student){
		let sql = "update student set name='"+student.name+"', gender='"+student.gender+"',birth='"+student.birth+"',clazz_id="+student.clazz_id+" where id ="+student.id;
		return pool.execute(sql);
	}

	
}//结束