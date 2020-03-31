const Service = require('egg').Service;

class ArticleService extends Service {
  async create(params) {
    const { app } = this;
    try {
      // const result = await app.mysql.insert('article', params);
      const result = 1;
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async lists() {
    const { app } = this;
    try {
      // const result = await app.mysql.select('article');
      const result = 2;
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async detail(id) {
    if (!id) {
      console.log('id必须传递');
      return null;
    }
    try {
      // const result = await this.app.mysql.get('article', { id });
      const result = 3;
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = ArticleService;
