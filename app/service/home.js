const Service = require('egg').Service
const _ = require('lodash')
import area from '../public/area'

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

    return area[_.findIndex(area, res.data.city)]
  }
}

module.exports = HomeService