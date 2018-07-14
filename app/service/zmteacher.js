'use strict';

const Service = require('egg').Service;
const Mock = require('mockjs');




class ZmteacherService extends Service {
  // 获取所有用户列表
  async list() {

    var Random = Mock.Random;
    const listData=Mock.mock([{
      name: Mock.mock('@cname'),
      "num|1-100": 100,
      "subjects|1": [
        "语文",
        "数学",
        "英语"
      ],
      "peopleNum|1-100": 100,
      "headImage":Random.image('80x80', '#50B347', '#FFF', 'img')
    },{
      name: Mock.mock('@cname'),
      "num|1-100": 100,
      "subjects|1": [
        "语文",
        "数学",
        "英语"
      ],
      "peopleNum|1-100": 100,
      "headImage":Random.image('80x80', '#50B347', '#FFF', 'img')
    },{
      name: Mock.mock('@cname'),
      "num|1-100": 100,
      "subjects|1": [
        "语文",
        "数学",
        "英语"
      ],
      "peopleNum|1-100": 100,
      "headImage":Random.image('80x80', '#50B347', '#FFF', 'img')
    }])

    const result={
      sumPagination: 30,
      nowPagination: 1,
      listData:listData
    }
    return result;
  }

}

module.exports = ZmteacherService;
