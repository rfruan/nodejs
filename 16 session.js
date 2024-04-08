const session = require('express-session')
const express = require('express')
const app = express()
// 注册中间件即可访问使用session对象
app.use(session({
  secret: 'keyborad cat', //任意字符串
  //固定写法
  resave: false,
  saveUninitialized: true
}))

// 托管静态页面
app.use(express.static('./pages'))
//express.urlencoded解析客户端发送的 URL 编码格式的请求体数据，将其转换为 JavaScript 对象，并将其赋值给 req.body。
//解析表单中的 url-encoded 格式的数据
app.use(express.urlencoded({ extended: false }));

// 配置成功后，即可通过 req.session 来访问和使用 session 对象，从而存储用户的关键信息
app.post('/api/login', (req, res) => {
  //验证用户信息
  if (req.body.username !== 'admin' || req.body.password !== '123456') {
    return res.send({ status: 1, msg: 'fail' })
  }

  req.session.user = req.body // 存到session
  req.session.islogin = true//储存用户登录状态
  res.send({ status: 0, msg: 'success' })
})


//获取session
app.get('/api/username', (req, res) => {
  if (!req.session.islogin) {
    return res.send({ status: 1, msg: 'fail' })
  }
  res.send({ status: 0, msg: 'success', username: req.session.user.username })
})

// 退出登录的接口
app.post('/api/logout', (req, res) => {
  // TODO_04：清空 Session 信息
  req.session.destroy()
  res.send({
    status: 0,
    msg: '退出登录成功',
  })
})

app.listen('8080', () => {
  console.log('starting');
})