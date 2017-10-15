let express = require('express');
let clazzDB = require('../db/clazzDB');
let Clazz = require('../model/Clazz');

let router = express.Router();

router.get('/findAll',(req,resp)=>{
	clazzDB.findAll().then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

router.get('/findById',(req,resp)=>{
	clazzDB.findById(req.query.id).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

router.get('/query/:keys',(req,resp)=>{
	clazzDB.query(req.params.keys).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

router.post('/save',(req,resp)=>{
	let clazz = new Clazz();
	Object.assign(clazz,req.body);
	clazzDB.save(clazz).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});

router.post('/update',(req,resp)=>{
	var clazz = new Clazz();
	Object.assign(clazz,req.body);
	clazzDB.update(clazz).then((results)=>{
		resp.send(results);
	}).catch((error)=>{
		resp.send(error);
	});
});


router.post('/batchDelete',(req,resp)=>{
	var ids = req.body;
	console.log(ids);
	if(ids.length>0){
		clazzDB.batchDelete(ids).then((results)=>{
			resp.json(results);
		}).catch((error)=>{
			resp.json(error);
		});
	}else{
		resp.json({'affectedRows':0});
	}
});

module.exports = router;