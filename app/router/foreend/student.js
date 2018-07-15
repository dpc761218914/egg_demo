'use strict';

module.exports = app => {
  //班级管理，获取学生列表，前端需要post，提交用户id，当前页
  const {router,controller} = app;
  router.post('/student/list', controller.foreend.student.getStudentList);

  //学生增删改查
  router.post('/student/createStudent', controller.foreend.student.createStudent);
  router.get('/student/getStudent/:id', controller.foreend.student.getStudent);
  router.post('/student/updateStudent', controller.foreend.student.updateStudent);
  router.get('/student/delStudent/:id', controller.foreend.student.delStudent);
  //获取多条学生记录
  router.get('/student/getStudentList', controller.foreend.student.getStudentList);


};
