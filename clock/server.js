const fs = require('fs')
const path = require('path')
const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
  let url = req.url
  const fpath = path.join(__dirname, url) //映射为本地文件的存放路径
  fs.readFile(fpath, (err, data) => {
    if (err) res.end('404 not found')
    else {
      res.end(data)
    }
  })
})
server.listen('80', () => {
  console.log('web start');
})