const Controller = require('egg').Controller;

function toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
}

class userController extends Controller {
    // 查询所有
    async index() {
        const { ctx } = this
        const res = await ctx.model.User.findAll();
        ctx.body = {
            status: 200,
            data: res
        }
    }

    // 增加
    async add() {
        const { ctx } = this
        const { name, age } = ctx.request.body;
        const res = await ctx.model.User.create({ name, age })
        ctx.body = {
            status: 200,
            data: res
        }
    }

    // 根据主键查找
    async findOne() {
        const { ctx } = this
        const id = ctx.params.id;
        const res = await ctx.model.User.findByPk(toInt(id))
        ctx.body = {
            status: 200,
            data: res
        }
    }

    // 根据主键更新某一条
    async update() {
        const { ctx } = this
        const id = ctx.params.id;
        const user = await ctx.model.User.findByPk(toInt(id));
        if (!user) {
            ctx.status = 404;
            return;
        }
        const { name, age } = ctx.request.body;
        await user.update({ name, age });
        ctx.body = user;
    }
}

module.exports = userController