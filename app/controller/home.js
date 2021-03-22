const Controller = require('egg').Controller;

class HomeController extends Controller {
  async getNowAdd() {
    console.log(this.ctx.request.ip);


    // const res = await this.ctx.service.home.getNowAdd()
  }
}

module.exports = HomeController;
