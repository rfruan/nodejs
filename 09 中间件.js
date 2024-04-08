//当一个请求到达 Express 的服务器之后，可以连续调用多个中间件，从而对这次请求进行预处理,本质上就是一个 function 处理函数
//next 函数是实现多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或路由。
//多个中间件之间， 共享同一份 req 和 res。基于这样的特性，我们可以在上游的中间件中， 统一为 req 或 res 对象添加自定义的属性或方法，供下游的中间件或路由进行使用
//可以使用 app.use() 连续定义多个全局中间件。客户端请求到达服务器之后，会按照中间件定义的先后顺序依次进行
const router = require('./08 路由.js')
const middle = function (req, res, next) {
  console.log('我是局部中间件');
  req.starttime = Date.now()
  next() //转交给下一个中间件
}

const express = require('express')
const app = express()

// app.use(middle)//全局生效,当客户端发送请求时会先开启中间件再到下一个符合条件的路由
// 第三方插件
const body = require('body-parser')
app.use(body())

// 内置插件
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//不使用use的中间件就是局部生效中间件，在METHOD(PATH,HANDLER)种定义的就是局部中间件,可以添加多个，只在当前路由生效
app.get('/', middle, (req, res) => {
  res.send('局部中间件')
})

app.use(router)
app.listen('80', () => {
  console.log('listen');
})

//中间件的5个使用注意事项
// ① 一定要在路由之前注册中间件
// ② 客户端发送过来的请求， 可以连续调用多个中间件进行处理
// ③ 执行完中间件的业务代码之后， 不要忘记调用 next() 函数
// ④ 为了防止代码逻辑混乱，调用 next() 函数后不要再写额外的代码
// ⑤ 连续调用多个中间件时，多个中间件之间， 共享 req 和 res 对象

// 常见的中间件用法，分成了 5 大类，分别是：
// ① 应用级别的中间件，通过 app.use() 或 app.get() 或 app.post() ， 绑定到 app 实例上的中间件
// ② 路由级别的中间件 绑定到 express.Router() 实例上的中间件，叫做路由级别的中间件。它的用法和应用级别中间件没有任何区别。router.use,或者局部
// ③ 错误级别的中间件 ，没有next() 专门用来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。错误级别中间件的 function 处理函数中， 必须有 4 个形参，形参顺序从前到后，分别是 (err, req, res, next)。，错误级别的中间件，必须注册在所有路由之后！
// ④ Express 内置的中间件
// 3 个常用的中间件，极大的提高了 Express 项目的开发效率和体验：
// ① express.static 快速托管静态资源的内置中间件，例如： HTML 文件、图片、 CSS 样式等（无兼容性）
// ② express.json 解析 JSON 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可用）
// ③ express.urlencoded 解析 URL-encoded 格式的请求体数据（有兼容性，仅在 4.16.0+ 版本中可用）
// ⑤ 第三方的中间件，按需下载并配置，如 body-parser 这个第三方中间件，来解析请求体数据
// 运行 npm install body-parser 安装中间件
// 使用 require 导入中间件， 调用 app.use() 注册并使用中间件
