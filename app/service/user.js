'use strict';

const Service = require('egg').Service;
const nzd = require('node-zookeeper-dubbo');
//const nzd_config = require('../config/nzd_conf.js');
//const nzd_config_user = require('./users.nzd.js');

//const opt = nzd_config_user.userServices_opt;


const opt={
  application:{name:'edu_exam_provider'},
  register:'192.168.17.165:2181',
  //192.168.17.165
  dubboVer:'2.5.10',
  root:'dubbo',
  dependencies:{
    IUserService:{
      interface:'com.jzy.edu.exam.service.IUserService',
      timeout:6000,
      methodSignature: {
        insertUser: user => [
          { $class: "com.jzy.edu.exam.domain.User", $: user }
        ],
        fin0dUser: id => [{ $class: "java.lang.Integer", $: id }],
        getUser: id => [{ $class: "java.lang.Integer", $: id }],
        findUser: id => [{ $class: "java.lang.Integer", $: id }],
        getJsonUser: i => [{ $class: "java.lang.Integer", $: i }],
      }
    },
  }
}

opt.java = require('js-to-java');

const Dubbo = new nzd(opt);

Dubbo.on('service: changed', (event) => {
  console.log(event);
});

class UserService extends Service {
  // 获取所有用户列表
  async getOne() {
    let result = await Dubbo.IUserService.findUser(1);
    /*const result = {
      role: [ 'admin' ],
      name: 'admin',
      introduction: '我是超级管理员',
      token: 'admin',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    };*/
    return result;
  }

}

module.exports = UserService;
