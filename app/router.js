'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;



  router.get('/', controller.home.index);
  router.post('/mypost', controller.home.mypost);
  router.post('/mock', controller.home.mock);
  router.post('/redis', controller.home.redis);

  //班级管理，获取学生列表，前端需要post，提交用户id，当前页
  router.post('/student/list', controller.student.getStudentList);
  //邀请老师
  router.post('/teacher/list', controller.teacher.getTeacherList);



};
