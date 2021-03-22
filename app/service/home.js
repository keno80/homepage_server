const Service = require('egg').Service

class HomeService extends Service {
  async getNowAdd(ipAddr) {
    const url = 'http://gwgp-ctb2bqsidcg.i.bdcloudapi.com/ip2location/retrieve'
    const res = await this.ctx.curl(url, {
      method: 'POST',
      headers: {
        "X-Bce-Signature": "AppCode/681fc86c6ffd423a8cdeaccc645b95ad",
        "content-type": "application/json"
      },
      data: {
        ip: '182.133.38.156'
      },
      dataType: 'json'
    })

    console.log(res.data);
    // console.log(res.data.toString('utf8'));
  }
}

module.exports = HomeService