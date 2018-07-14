'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1531531631158_5111';

  // add your config here
  config.middleware = [];

  //关闭默认的安全校验
  config.security={
    csrf: false
  };

  // 跨域请求配置
  config.cors = {
      origin: '*', // 星号代表允许所有的请求源
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS', // 允许的请求方式
      credentials: true
    };

  return config;
};
