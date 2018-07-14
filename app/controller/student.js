'use strict';

const Controller = require('egg').Controller;
const Mock = require('mockjs');



class StudentController extends Controller {
  async getStudentList() {
    //this.ctx.body = 'hi, egg';
    const { ctx,service } = this;
    //获取body请求参数
    //const mobile= ctx.request.body.mobile;
      const res = await service.zmstudent.list();
      ctx.helper.success({ctx, res})

  }

}

module.exports = StudentController;
