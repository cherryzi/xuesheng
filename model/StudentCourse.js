class StudentCourse{
	constructor(id,grade,student_id=null,course_id=null){
		this.id = id;
		this.grade = grade;
		this.student_id = student_id;
		this.course_id = course_id;
	}
}

module.exports=StudentCourse