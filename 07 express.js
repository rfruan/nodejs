// Express 是基于 Node.js 平台， 快速、开放、极简的 Web 开发框架。,Express 的作用和 Node.js 内置的 http 模块类似， 是专门用来创建 Web 服务器的。
// Express 的本质：就是一个 npm 上的第三方包，提供了快速创建 Web 服务器的便捷方法
// http 内置模块用起来很复杂，开发效率低； Express 是基于内置的 http 模块进一步封装出来的，能够极大的提高开发效率。

//1. 创建express web服务器
const express = require('express')
//创建web服务器
const server = express()

//get() 方法，可以监听客户端的 GET 请求
// server.get('/index.html', (req, res) => {

//   // 获取 URL 中携带的查询参数,通过 req.query 对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数
//   res.send(req.query)
// })

//get() 方法，可以监听客户端的 GET 请求
// server.get('/user/:id', (req, res) => {
//   //通过 req.params 对象，可以访问到 URL 中，通过 : 匹配到的动态参数
//   res.send(req.params)

// })
// server.post('/user', (req, res) => {
//   //通过 res.send() 方法，可以把处理好的内容，发送给客户
//   res.send({ name: 'rf', age: 20 })
// })

//express 提供了一个非常好用的函数，叫做 express.static()，通过它，我们可以非常方便地创建一个静态资源服务器
// server.use(express.static('clock')) //直接进入clock.index.html 可以访问该目录下的所有资源
//访问静态资源文件时， express.static() 函数会根据目录的添加顺序查找同名所需的文件。
//如果希望在托管的静态资源访问路径之前， 挂载路径前缀，
server.use('/loginabc', express.static('clock'))
// 调用listen 监听
server.listen('80', () => {
  console.log('express web server run');
})
//使用 nodemon app.js 来启动项目。这样做的好处是：代码被修改之后，会被 nodemon 监听到，从而实现自动重启项目的效果。

