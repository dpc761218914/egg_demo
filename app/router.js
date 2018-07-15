'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  //-----------前端入口--------
  //学生模块
  require('./router/foreend/student')(app);
  //教师模块
  require('./router/foreend/teacher')(app);
  //综合
  require('./router/foreend/test')(app);
  //-----------后端入口--------
  //-----------微信入口--------
};
