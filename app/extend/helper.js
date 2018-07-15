
const ResponseCode = require('../common/responseCode');

// 处理成功响应
exports.success = ({ ctx, msg = null,res = null})=> {
  ctx.body = {
    code: ResponseCode.SUCCESS,
    msg:msg,
    data: res
  }
  ctx.status = 200
}

// 处理失败，需要传入失败原因
exports.fail = ({ ctx, msg = null,res = null})=> {
  ctx.body = {
    code:  ResponseCode.FAIL,
    msg:msg,
    data: res
  }
  ctx.status = 200
}

