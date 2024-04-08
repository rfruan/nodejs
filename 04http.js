// http 模块是 Node.js 官方提供的、用来创建 web 服务器的模块。通过 http 模块提供的 http.createServer() 方法，就能方便的把一台普通的电脑，变成一台 Web 服务器，从而对外提供 Web 资源服
// 服务器和普通电脑的区别在于，服务器上安装了 web 服务器软件
//只要服务器接收到了客户端的请求，就会调用通过 server.on() 为服务器绑定的 request 事件处理函数
// req访问与客户端相关的数据或属性, res 访问与服务器相关的数据或属性
// 手动设置内容的编码格式 setHeader('Content-Type','text/html;charset=utf-8')
const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
  const url = req.url
  let content
  if (url === '/') {
    console.log('<h1>首页<\/h1>');
    content = '<h1>首页<\/h1>'
  } else
    content = '404不存在'
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  res.end(content)
})
server.listen('80', () => {
  console.log('web服务启动');
})