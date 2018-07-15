'use strict';

const Service = require('egg').Service;
const Mock = require('mockjs');




class StudentService extends Service {

  constructor(ctx) {
    super(ctx);
    this.ResponseCode = ctx.response.ResponseCode;
    this.ServerResponse = ctx.response.ServerResponse;
  }

  // 获取所有用户列表
  async list() {

    const result={
    };
    return this.ServerResponse.createByErrorMsg('找不到当前用户');
  }

}

module.exports = StudentService;
