'use strict';

const Controller = require('egg').Controller;
const Mock = require('mockjs');



class StudentController extends Controller {
  async getStudentList() {
    //this.ctx.body = 'hi, egg';
    const { ctx,service } = this;
    //获取body请求参数
    //const mobile= ctx.request.body.mobile;
     /* const res = await service.student.list();
      this.ctx.body = res;*/
    const res={data:'mydatalist'};
    const msg=ctx.response.ResponseMsg.NO_AUTH;
    if(1){
      //如果用户提交参数有误，需要返回异常的情况
      ctx.helper.fail({ctx,msg,res});
    }else{}
    ctx.helper.success({ctx,msg,res});
  }

}

module.exports = StudentController;
