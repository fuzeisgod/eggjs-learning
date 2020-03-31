'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // 需要 await
    const res = await ctx.service.product.index();
    // ctx.body = res;
    // 采用同步编程的模式，传两个参数（模板页名字， 模板页插入数据）
    await ctx.render('index.html', {
      res,
      lists: [ 'a', 'b', 'c' ],
    });
  }
}

module.exports = HomeController;
