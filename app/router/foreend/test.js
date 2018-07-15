'use strict';

module.exports = app => {
  const {router,controller} = app;
  router.get('/', controller.foreend.home.index);
  router.post('/mypost', controller.foreend.home.mypost);
  router.post('/mock', controller.foreend.home.mock);
  router.post('/redis', controller.foreend.home.redis);
};
