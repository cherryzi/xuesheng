let pool = require('./pool');
module.exports = {
	findAll(){
		let sql = "select * from course";
		return pool.execute(sql); 
	},
	findById(id){
		let sql = "select * from course where id = "+id;
		return pool.execute(sql);
	},
	query(keys){
		let sql = "select * from course where name like '%"+keys+"%' or credit like '%"+keys+"%'";
		return pool.execute(sql);
	},
	save(course){
		let sql = "insert into course values(null,'"+course.name+"','"+course.credit+"')";
		console.log(sql);
		return pool.execute(sql);

	},
	batchDelete(ids){
		let sql = "delete from course where id in ("+ids.join()+")";
		console.log(sql);
		return pool.execute(sql);
	},
	update(course){
		let sql = "update course set name = '"+course.name+"',credit = '"+course.credit+"' where id ="+course.id;
		console.log(sql);
		return pool.execute(sql);
	}
}