const express = require('express')
const app = express()

// 注册路由
const router = require('./11-1 router.js')

//实现跨域资源共享
// ① 运行 npm install cors 安装中间件
// ② 使用 const cors = require('cors') 导入中间件
const cors = require('cors')
app.use(cors())

// ③ 在路由之前调用 app.use(cors()) 配置中间件

//CORS （Cross-Origin Resource Sharing，跨域资源共享）由一系列 HTTP 响应头组成， 这些 HTTP 响应头决定浏览器是否阻止前端 JS 代码跨域获取资源。
// setHeader('属性'，值)
// 浏览器的同源安全策略默认会阻止网页“跨域”获取资源。但如果接口服务器配置了 CORS 相关的 HTTP 响应头，就可以解除浏览器端的跨域访问限制
// Access-Control-Allow-Origin 指定了 Access-Control-Allow-Origin 字段的值为通配符 *，表示允许来自任何域的请求
//Access-Control-Allow-Headers: 默认情况下， CORS 仅支持客户端向服务器发送如下的 9 个请求头
// Access-Control-Allow-Methods 默认情况下， CORS 仅支持客户端发起 GET、 POST、 HEAD 请求。

//解析表单中间件
app.use(express.urlencoded({ extended: false }))

app.use('/api', router)

app.listen('8080', () => {
  console.log('express server running at 8080');
})

// 在浏览器与服务器正式通信之前，浏览器会先发送 OPTION 请求进行预检，以获知服务器是否允许该实际请求，所以这一
// 次的 OPTION 请求称为“预检请求”。 服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据。
// 只要符合以下任何一个条件的请求，都需要进行预检请求：
// ① 请求方式为 GET、 POST、 HEAD 之外的请求 Method 类型
// ② 请求头中包含自定义头部字段
// ③ 向服务器发送了 application/j

// 同时满足以下两大条件的请求，就属于简单请求：
// ① 请求方式： GET、 POST、 HEAD 三者之一
// ② HTTP 头部信息不超过以下几种字段： 无自定义头部字段、 Accept、 Accept-Language、 Content-Language、 DPR、
// Downlink、 Save-Data、 Viewport-Width、 Width 、 Content-Type（只有三个值application/x-www-formurlencoded、 multipart/form-data、 text/plain）


