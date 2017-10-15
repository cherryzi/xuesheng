require("babel-polyfill");
let Student = require("../model/Student");
let Course = require("../model/Course");
let Clazz = require("../model/Clazz");
let studentDB = require("./studentDB");
let courseDB = require("./courseDB");
let teacherDB = require('./teacherDB');
let clazzDB = require('./clazzDB');


 
// studentDB.findAll().then(function(results){
// 	console.log(results);
// }).catch(function(error){
// 	console.log("报错了",error);
// });

// studentDB.findById(15).then(function(results){
// 	console.log(results);
// }).catch(function(error){
// 	console.log("报错了",error);
// });


// studentDB.query('王').then(function(results){
// 	console.log(results);
// }).catch(function(error){
// 	console.log("报错了",error);
// });

 

// var student = new Student(null,'2','男','1994-9-2');
// console.log(student);
// studentDB.save(student).then(function(results){
// 	console.log(results);
// }).catch(function(error){
// 	console.log("报错了",error);
// });

// var student = new Student(30,'紫萱','女','2000-1-1',1);
// studentDB.update(student).then(function(results){
// 	console.log(results);
// }).catch(function(error){
// 	console.log("报错了",error);
// });


// var ids = [13];
// studentDB.batchDelete(ids).then(function(results){
// 	console.log(results);
// }).catch(function(error){
// 	console.log("报错了",error);
// });


// ----------------------------------------
// courseDB.findAll().then(function(results){
// 	console.log(results);
// }).catch(function(error){
// 	console.log(error);
// });

// courseDB.findById(3).then(function(results){
// 	console.log(results);
// }).catch(function(error){
// 	console.log(error);
// });


// courseDB.query(3).then(function(results){
// 	console.log(results);
// }).catch(function(error){
// 	console.log(error);
// });

// var course = new Course(null,'javaweb',4);
// courseDB.save(course).then(function(results){
// 	console.log(results);
// }).catch(function(error){
// 	console.log(error);
// });

// var ids = [11,12];
// courseDB.batchDelete(ids).then(function(results){
// 	console.log(results);
// }).catch(function(error){
// 	console.log(error);
// });
 
// var course = new Course(15,'javaweb',5);
// courseDB.update(course).then(function(results){
// 	console.log(results);
// }).catch(function(error){
// 	console.log(error);
// });
