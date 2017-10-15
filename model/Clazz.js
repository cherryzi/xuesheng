class Clazz{
	constructor(id,name,createDate,teacher_id=null){
		this.id = id;
		this.name = name;
		this.createDate = createDate;
		this.teacher_id = teacher_id;
	}
}
module.exports=Clazz;