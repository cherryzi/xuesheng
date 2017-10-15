let express = require('express');
let teacherDB=require('../db/teacherDB');
let Teacher = require('../model/Teacher.js');
let router = express.Router();

//查询所有
router.get('/findAll',(req,resp)=>{
  teacherDB.findAll().then((results)=>{
    resp.send(results);
  }).catch((error)=>{
    resp.send(error);
  });
});
//通过id查询
router.get('/findById',(req,resp)=>{
  teacherDB.findById(req.query.id).then((results)=>{
    resp.send(results);
  }).catch((error)=>{
    resp.send(error);
  });
})
//模糊查询
router.get('/query/:keys',(req,resp)=>{
	teacherDB.query(req.params.keys).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
       	resp.send(error);
 	 });
})
//录入
router.post('/save',(req,resp)=>{
  let teacher = new Teacher();
  Object.assign(teacher,req.body);
  console.log(teacher);
  teacherDB.save(teacher).then((results)=>{
    resp.send(results);
  }).catch((error)=>{
    resp.send(error);
  });
});
//修改
router.post("/update",(req,resp)=>{
  let teacher = new Teacher();
  Object.assign(teacher,req.body);
  teacherDB.update(teacher).then((data)=>{
    resp.send(data);
  }).catch((error)=>{
    resp.send(error);
  });
})
//批量删除
router.post('/batchDelete',(req,resp)=>{
  var ids = req.body;
  if(ids.length>0){
    teacherDB.batchDelete(req.body).then((results)=>{
        resp.json(results);
    }).catch((error)=>{
        resp.json(error);
    });
  }else {
    resp.json({'affectedRows':0});
  }
});

module.exports = router;
