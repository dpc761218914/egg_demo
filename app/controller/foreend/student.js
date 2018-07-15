'use strict';

const Controller = require('egg').Controller;
const Mock = require('mockjs');



class StudentController extends Controller {

  async createStudent() {
    const { ctx,service } = this;
    //1、获取用户post的参数
    //2、参数校验
    //3、调用service，存入数据
    //4、做响应与前端交互
    const res={data:'this is data'};
    const msg=ctx.response.ResponseMsg.SUCCESS;
    ctx.helper.success({ctx,msg,res});
  }
  async updateStudent() {
    const { ctx,service } = this;
    const res={data:'this is data'};
    const msg=ctx.response.ResponseMsg.SUCCESS;
    ctx.helper.success({ctx,msg,res});
  }
  async getStudent() {
    const { ctx,service } = this;
    const res={data:'this is data'};
    const msg=ctx.response.ResponseMsg.SUCCESS;
    ctx.helper.success({ctx,msg,res});
  }
  async delStudent() {
    const { ctx,service } = this;
    const res={data:'this is data'};
    const msg=ctx.response.ResponseMsg.SUCCESS;
    ctx.helper.success({ctx,msg,res});
  }
  async getStudentList() {
    //this.ctx.body = 'hi, egg';
    const { ctx,service } = this;
    //获取body请求参数
    //const mobile= ctx.request.body.mobile;
    /* const res = await service.student.list();
     this.ctx.body = res;*/
    const res={data:'this is data'};
    const msg=ctx.response.ResponseMsg.PASSWORD_ERROR;
    if(1){
      //如果用户提交参数有误，需要返回异常的情况
      ctx.helper.fail({ctx,msg,res});
    }else{}
    ctx.helper.success({ctx,msg,res});
  }
}

module.exports = StudentController;
