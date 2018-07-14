'use strict';

module.exports = app => {
  const {router,controller} = app;
  router.get('/', controller.home.index);
  router.post('/mypost', controller.home.mypost);
  router.post('/mock', controller.home.mock);
  router.post('/redis', controller.home.redis);
};
