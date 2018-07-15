'use strict';

const Service = require('egg').Service;
const Mock = require('mockjs');




class StudentService extends Service {

  // 创建用户
  async createStudent(student) {
    //获取用户提交的对象
    var student=student;
    //将数据通过nzd传给java后端
    const result={
    };
    return result;
  }
  // 根据id获取用户
  async getStudent(id) {
    const result={
    };
    return result;
  }

  // 根据id更新student
  async getStudent(id,student) {
    const result={
    };
    return result;
  }

  // 根据id删除student
  async delStudent(id) {
    const result={
    };
    return result;
  }

  // 获取所有用户列表
  async getStudentList() {
    const result={
    };
    return result;
  }

}

module.exports = StudentService;
