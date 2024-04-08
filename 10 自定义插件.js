// 手动模拟一个类似于 express.urlencoded 这样的中间件，来解析 POST 提交到服务器的表单数据
// ① 定义中间件
// ② 监听 req 的 data 事件
// ③ 监听 req 的 end 事件
// ④ 使用 querystring 模块解析请求体数据
// ⑤ 将解析出来的数据对象挂载为 req.body
// ⑥ 将自定义中间件封装为模块
const express = require('express')

const body = require('./10-2 自定义插件封装.js')
const app = express()
app.use(body)
app.get('/user', (req, res) => {
  res.send(req.body)
})
app.listen('80', () => {
  console.log('listen');
})