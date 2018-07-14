'use strict';

module.exports = app => {
  //班级管理，获取学生列表，前端需要post，提交用户id，当前页
  const {router,controller} = app;
  router.post('/student/list', controller.student.getStudentList);
};
