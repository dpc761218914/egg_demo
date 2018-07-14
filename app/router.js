'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  //学生模块
  require('./router/student')(app);
  //教师模块
  require('./router/teacher')(app);
  //综合
  require('./router/test')(app);
};
