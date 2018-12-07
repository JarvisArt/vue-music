import {commonParams} from './config'
import axios from 'axios'
import jsonp from 'common/js/jsonp'

export function getSingerKEY(midkey) {
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
  const datas = Object.assign({}, commonParams,{
    loginUin: 0,
    hostUin: 0,
    inCharset: 'utf8',
    platform: 'yqq',
    needNewCode: 0,
    g_tk: 5381,
    format: 'jsonp',
    outCharset: 'utf-8',
    notice: 0,
    data: `{"req":{"module":"CDN.SrfCdnDispatchServer","method":"GetCdnDispatch","param":{"guid":"8162209236","calltype":0,"userip":""}},"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"8162209236","songmid":["${midkey}"],"songtype":[0],"uin":"0","loginflag":1,"platform":"20"}},"comm":{"uin":0,"format":"json","ct":20,"cv":0}}`
  })
  return jsonp(url, datas)
}

export function getLyric(mid) {
  const url = '/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: +new Date(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
