class Student{
	constructor(id,name,gender,birth,clazz_id=null){
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.birth = birth;
		this.clazz_id = clazz_id;
	}
}

module.exports = Student