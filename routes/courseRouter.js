let express = require("express");
let courseDB = require("../db/courseDB");
let Course = require("../model/Course");
let router = express.Router();

router.get('/findAll',(req,resp)=>{
	courseDB.findAll().then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});


router.get('/findById',(req,resp)=>{
	courseDB.findById(req.query.id).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

//localhost:3000/student/query/zhangsan
router.get('/query/:keys',(req,resp)=>{
	// console.log(req.params.keys);
	courseDB.query(req.params.keys).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});


router.post('/save',(req,resp)=>{
	var course = new Course();
	Object.assign(course,req.body);
	courseDB.save(course).then(function(results){
		resp.json(results);
	}).catch(function(error){
		resp.send(error);
	})
});

router.post('/update',(req,resp)=>{
	var course = new Course();
	Object.assign(course,req.body);
	courseDB.update(course).then(function(results){
		resp.send(results);
	}).catch(function(error){
		resp.send(error);
	})
});

router.post('/batchDelete',(req,resp)=>{
	var ids = req.body;
	console.log(ids);
	if(ids.length>0){
		courseDB.batchDelete(req.body).then(function(results){
			resp.json(results);
		}).catch(function(error){
			resp.json(error);
		});
	}else{
		resp.json({'affectedRows':0});
	}
	
});
module.exports = router;