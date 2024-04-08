//jsonp 
// 通过 <script> 标签的 src 属性，请求服务器上的数据，同时，服务器返回一个函数的调用。这种请求数据的方式叫做 JSONP。
// ① JSONP 不属于真正的 Ajax 请求，因为它没有使用 XMLHttpRequest 这个对象。
// ② JSONP 仅支持 GET 请求，不支持 POST、 PUT、 DELETE 等请求。

//如果项目中已经配置了 CORS 跨域资源共享，为了防止冲突， 必须在配置 CORS 中间件之前声明 JSONP 的接口。否则JSONP 接口会被处理成开启了 CORS 的接口。

const express = require('express')
const app = express()
const cors = require('cors')
app.get('/api/jsonp', (req, res) => {
  // 获取回调函数名字
  const fname = req.query.callback
  const data = { name: 'rf', age: 12 }
  // 拼接字符串
  const str = `${fname}(${JSON.stringify(data)})`
  //发送客户端
  res.send(str)
})
//jsonp用在cors前就不会开启跨域
app.use(cors())
app.get('/api/get', (req, res) => {
  res.send('发生了')
})
app.listen('8080', () => {
  console.log('express server running at 8080');
})
