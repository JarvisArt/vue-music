let express = require('express')
let config = require('./config/index')
let axios = require('axios')

const app = express()
const apiRoutes = express.Router()
app.get('/api/getDiscList', function (req,res) {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  axios.get(url,{
    headers:{
      referer:'https://y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query //前端传过来的数据
  }).then((response)=>{
    res.json(response.data)
  }).catch((e)=>{
    console.log(e)
  })
})

app.get('/api/lyric', function (req,res) {
  var url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    var ret = response.data
    if (typeof ret === 'string') {
      var reg = /^\w+\(({[^()]+})\)$/
      var matches = ret.match(reg)
      if (matches) {
        ret = JSON.parse(matches[1])
      }
    }
    res.json(ret)
  }).catch((e) => {
    console.log(e)
  })
})

app.get('/api/getSongList', function (req,res) {
  var url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'u.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(JSON.parse(response.data.slice(13,response.data.length-1)))
  }).catch((e) => {
    console.log(e)
  })
})

app.get('/api/search', function (req,res) {
  var url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com/',
      host: 'u.y.qq.com'
    },
    params: req.query
  }).then((response) => {
    res.json(JSON.parse(response.data.slice(9,response.data.length-1)))
  }).catch((e) => {
    console.log(e)
  })
})

app.use('/api', apiRoutes)

app.use(express.static('./dist'))

let port = process.env.PORT || config.build.port

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
