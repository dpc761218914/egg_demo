'use strict';

const Controller = require('egg').Controller;




class TeacherController extends Controller {

    async getTeacherList() {
        //this.ctx.body = 'hi, egg';
        const { ctx,service } = this;
        //获取body请求参数
        //const mobile= ctx.request.body.mobile;
        const res = await service.zmteacher.list();
        ctx.helper.success({ctx, res})
    }

}

module.exports = TeacherController;
