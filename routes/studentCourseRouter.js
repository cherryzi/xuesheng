let express = require('express');
let studentCourseDB = require('../db/studentCourseDB');
let StudentCourse = require('../model/StudentCourse');

let router = express.Router();

router.get('/findAll',(req,resp)=>{
	studentCourseDB.findAll().then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

router.get('/findById',(req,resp)=>{
	studentCourseDB.findById(req.query.id).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

router.get('/query/:keys',(req,resp)=>{
	studentCourseDB.query(req.params.keys).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

router.post('/save',(req,resp)=>{
	var studentCourse = new StudentCourse();
	Object.assign(studentCourse,req.body);
	studentCourseDB.save(studentCourse).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

router.post('/update',(req,resp)=>{
	studentCourse = new StudentCourse();
	Object.assign(studentCourse,req.body);
	studentCourseDB.update(studentCourse).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

router.post('/batchDelete',(req,resp)=>{
	var ids = req.body;
	if(ids.length>0){
		studentCourseDB.batchDelete(ids).then((results)=>{
			resp.json(results);
		}).catch((error)=>{
			resp.json(error);
		});
	}else{
		resp.json({'affectedRows':0});
	}
});

module.exports=router;