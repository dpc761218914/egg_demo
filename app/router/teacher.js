'use strict';

module.exports = app => {
  //邀请老师
  const {router,controller} = app;
  router.post('/teacher/list', controller.teacher.getTeacherList);
};
