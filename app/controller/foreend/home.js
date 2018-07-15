'use strict';

const Controller = require('egg').Controller;
const Mock = require('mockjs');
const Redis=require('ioredis');
const redis=new Redis;

class HomeController extends Controller {
  async index() {
    //this.ctx.body = 'hi, egg';
    const { ctx, service} = this;

    ctx.body = {
      role: [ 'admin' ],
      name: 'admin',
      introduction: '我是超级管理员',
      token: 'admin',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    };
    ctx.status = 200;
    ctx.username='data'
  }

  async mypost() {
    //this.ctx.body = 'hi, egg';
    const { ctx, service} = this;
    console.log('post');
    const mobile= ctx.request.body.mobile;
    console.log(mobile);
    const res = await service.user.getOne();
    ctx.helper.success({ctx, res})

  }

  async mock() {
  //this.ctx.body = 'hi, egg';
  const { ctx, service} = this;
  console.log('mock');

  var Random = Mock.Random;

  const res = Mock.mock({
    "fixed":"这是固定好的数字",
    "string|3": "★★★",
    "image":Random.image('900x200', '#50B347', '#FFF', 'Mock.js'),  //模拟发送图片，可以控制普片颜色，图片大小，文字
    "data":Random.date('yyyy-MM-dd'),    //模拟时间  可以发送各种格式时间
    "text":'@paragraph',                  //模拟发送段落， 可以控制长度
    "sentence":Mock.mock('@sentence(5)'),   //模拟发送五个词的句子
    "word":Mock.mock('@word'),              //模拟发送单词
    "title":Mock.mock('@title(5)'),   //模拟发送标题
    "cParagraph":Mock.mock('@cparagraph(8)'), //模拟发送中文段落
    "cSentence": Mock.mock('@csentence()'),           //模拟发送中文句子
    "cWord":Mock.mock('@cword("零一二三四五六七八九十")'),   //模拟一个中文词语
    "cTitle": Mock.mock('@ctitle(5)'),     //模拟中文标题
    "cName": Mock.mock('@cname'),          //模拟用户姓名，可以单独模拟姓、也可以模拟名
    "cEmail":Mock.mock('@email'),         //模拟邮箱
    "cAddress":Mock.mock('@county(true)'),   //模拟地址
    "number":Mock.mock('@increment(100)'),    //模拟比一百大的数组
    "sectionNumber|1-100": 100,                //模拟1到100的随机数
    "boolean|1": true,                       //模拟boolean类型数据
    "objects|2":  {                          //模拟返回两个对象数组
      "310000": "上海市",
      "320000": "江苏省",
      "330000": "浙江省",
      "340000": "安徽省"
    },
    "array|1": [                              //模拟返回数组类型数据，从数组中取出随机数
      "AMD",
      "CMD",
      "UMD"
    ]

  });

  ctx.helper.success({ctx, res})

}

  async redis() {
    //this.ctx.body = 'hi, egg';
    const { ctx, service} = this;
   // console.log('redis');
    const myegg=redis.set('egg', 'myegg');
    const egg1=await redis.get('egg')
    console.log(egg1)
    const res={'egg':egg1};
    ctx.helper.success({ctx, res})
  }
}

module.exports = HomeController;
