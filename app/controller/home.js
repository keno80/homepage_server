const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getNowAdd() {
    this.ctx.body = await this.ctx.service.home.getNowAdd(this.ctx.request.ip)
  }
}

module.exports = HomeController;
