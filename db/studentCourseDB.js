let pool = require('./pool');

module.exports = {
	findAll(){
		let sql = "select * from studentCourse";
		return pool.execute(sql);
	},
	findById(id){
		let sql = "select * from studentCourse where id="+id;
		return pool.execute(sql);
	},
	query(keys){
		let sql = "select * from studentCourse where grade like '%"+keys+"%'";
		return pool.execute(sql);
	},
	save(studentCourse){
		let sql = "insert into studentCourse values(null,'"+studentCourse.grade+"','"+studentCourse.student_id+"','"+studentCourse.course_id+"')";
		return pool.execute(sql);
	},
	update(studentCourse){
		let sql = "update studentCourse set grade='"+studentCourse.grade+"',student_id='"+studentCourse.student_id+"',course_id='"+studentCourse.course_id+"' where id="+studentCourse.id;
		return pool.execute(sql);
	},
	batchDelete(ids){
		let sql = "delete from studentCourse where id in ("+ids.join(',')+")";
		return pool.execute(sql);
	}
}