/*  当前端请求后端接口不存在跨域问题的时候， 推荐使用 Session 身份认证机制。
当前端需要跨域请求后端接口的时候，不推荐使用 Session 身份认证机制，推荐使用 JWT 认证机制。 */
// Session 认证机制需要配合 Cookie 才能实现。由于 Cookie 默认不支持跨域访问，所以，当涉及到前端跨域请求后端接
// 口的时候， 需要做很多额外的配置，才能实现跨域 Session 认证

//JWT 通常由三部分组成，分别是 Header（头部）、 Payload（有效荷载）、 Signature（签名）
// Payload 部分才是真正的用户信息，它是用户信息经过加密之后生成的字符串。
// Header 和 Signature 是安全性相关的部分，只是为了保证 Token 的安全性。

// 客户端收到服务器返回的 JWT 之后，通常会将它储存在 localStorage 或 sessionStorage 中。
// 此后，客户端每次与服务器通信，都要带上这个 JWT 的字符串，从而进行身份认证。
// 推荐的做法是把 JWT 放在 HTTP请求头的 Authorization 字段中，
// jsonwebtoken 用于生成 JWT 字符串
// express-jwt 用于将 JWT 字符串解析还原成 JSON 对象
const jwtoken = require('jsonwebtoken')
const { expressjwt: expressjwt } = require('express-jwt');
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const cors = require('cors')
// 为了保证 JWT 字符串的安全性，防止 JWT 字符串在网络传输过程中被别人破解，我们需要专门定义一个用于加密和解密的 secret 密钥：
// ① 当生成 JWT 字符串的时候，需要使用 secret 密钥对用户的信息进行加密，最终得到加密好的 JWT 字符串
// ② 当把 JWT 字符串解析还原成 JSON 对象的时候，需要使用 secret 密钥进行解密
app.use(cors())
const secretKey = 'abnsdi'  //密钥是一个字符串
//jwt字符串还原为json对象，unless指定以/api开头的不需要访问权限,
// 配置成功后会自动把用户信息挂载到req.auth中
app.use(expressjwt({ secret: secretKey, algorithms: ["HS256"] }).unless({ path: [/^\/api\//] }))



// 托管静态页面
//express.urlencoded解析客户端发送的 URL 编码格式的请求体数据，将其转换为 JavaScript 对象，并将其赋值给 req.body。
//解析表单中的 url-encoded 格式的数据
app.use(bodyparser.urlencoded({ extended: false }));


// 配置成功后，即可通过 req.session 来访问和使用 session 对象，从而存储用户的关键信息
app.post('/api/login', (req, res) => {
  //验证用户信息
  if (req.body.username !== 'admin' || req.body.password !== '123456') {
    return res.send({ status: 1, msg: 'fail' })
  }
  // 生成jwt字符串，通过token属性响应给客户端
  res.send({
    status: 200,
    msg: 'success',
    // 设置sign三个参数： 用户信息对象，加密密钥和配置对象
    token: jwtoken.sign({ username: req.body.username }, secretKey, { expiresIn: '30s' })
  })
})


// 获取用户信息
app.get('/admin/getinfo', (req, res) => {
  console.log(req.auth);
  res.send({ status: 200, msg: 'success', data: req.auth })
})

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError')
    return res.send({ status: 400, msg: '无效的token' })
  res.send({ status: 500, msg: '未知错误' })
})
app.listen('8081', () => {
  console.log('starting');
})