'use strict';

const Service = require('egg').Service;
const Mock = require('mockjs');




class ZmstudentService extends Service {
  // 获取所有用户列表
  async list() {

    const result={
      sumPagination: 30,
      nowPagination: 1,
      listData: [{
        grade: "高三(2)班",
        teacher: "张三",
        num: "4885",
        establish: "李四",
        time: "2017.9.8",
        peopleNum: "50",
        isHistory: true
      },
        {
          grade: "高三(2)班",
          teacher: "张三",
          num: "4885",
          establish: "李四",
          time: "2017.9.8",
          peopleNum: "50",
          isHistory: true
        }]
    };

    return result;
  }

}

module.exports = ZmstudentService;
