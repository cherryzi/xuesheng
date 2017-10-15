let express = require("express");
let studentDB = require("../db/studentDB");
let Student = require("../model/Student");

let router = express.Router();

router.get('/findAll',(req,resp)=>{
	studentDB.findAll().then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

router.get('/findById',(req,resp)=>{
	studentDB.findById(req.query.id).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

//关键字
//localhost:3000/student/query/张三  路由中设定参数
router.get('/query/:keys',(req,resp)=>{
	// console.log(req.params);
	studentDB.query(req.params.keys).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

// 保存  
router.post('/save',(req,resp)=>{
	var student = new Student();
	Object.assign(student,req.body);
	// console.log(student);
	studentDB.save(student).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

//修改
router.post('/update',(req,resp)=>{
	var student = new Student();
	Object.assign(student,req.body);
	// console.log(student);
	studentDB.update(student).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

// 删除
router.post('/batchDelete',(req,resp)=>{
	var ids = req.body;
	if(ids.length>0){
		studentDB.batchDelete(req.body).then((results)=>{
			resp.json(results);
		}).catch((error)=>{
			resp.json(error);
		});
	}else {
		resp.json({'affectedRows':0});
	}
});


module.exports = router;