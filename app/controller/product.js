const Controller = require('egg').Controller

// 定义的 Controller 类，会在每一个请求访问到 server 时实例化一个全新的对象，而项目中的 Controller 类继承于 egg.Controller
class productController extends Controller {
    async index() {
        // 当前请求的上下文 Context 对象的实例，通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法
        const { ctx } = this
        const res = await ctx.service.product.index()
        ctx.body = res
    }

    async detail() {
        const { ctx } = this
        ctx.body = `id==${ctx.query.id}`
    }

    async detail2() {
        const { ctx } = this
        ctx.body = `id==${ctx.params.id}`
    }

    async create() {
        const { ctx } = this
        const { name, weight } = ctx.request.body
        ctx.body = {
            name: name,
            weight: weight
        }
    }

    async update() {
        const { ctx } = this
        ctx.body = {
            id: ctx.params.id
        }
    }

    async delete() {
        const { ctx } = this
        ctx.body = {
            id: ctx.params.id
        }
    }
}

module.exports = productController