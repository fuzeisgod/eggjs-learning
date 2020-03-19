const Controller = require('egg').Controller;

class ArticleController extends Controller {
    async create() {
        const { ctx } = this;
        ctx.body = {
            info: 'test'
        }
    }
}

module.exports = ArticleController;