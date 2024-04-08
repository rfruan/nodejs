// 路由指的是客户端的请求与服务器处理函数之间的映射关系。
// Express 中的路由分 3 部分组成，分别是请求的类型METHOD、 请求的 URL 地址PATH、 处理函数(RES,REQ)=>{}，格式如下
// app.METHOD(PATH,HANDLER)

//每当一个请求到达服务器之后， 需要先经过路由的匹配，只有匹配成功之后，才会调用对应的处理函数。
// 在匹配时，会按照路由的顺序进行匹配，如果请求类型和请求的 URL 同时匹配成功，则 Express 会将这次请求，转交给对应的 function 函数进行处理。

// 为了方便对路由进行模块化的管理， Express 不建议将路由直接挂载到 app 上，而是推荐将路由抽离为单独的模块。
// 将路由抽离为单独模块的步骤如下：
// ① 创建路由模块对应的 .js 文件
// ② 调用 express.Router() 函数创建路由对象
// ③ 向路由对象上挂载具体的路由
// ④ 使用 module.exports 向外共享路由对象
// ⑤ 使用 app.use() 函数注册路由模块
//为路由模块添加前缀,类似于托管静态资源时，为静态资源统一挂载访问前缀一样，
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('get method' + req.starttime)
})
router.get('/user/:id', (req, res) => {
  res.send('get user id =' + req.params.id)
})
router.get('/user', (req, res) => {
  res.send('get user' + JSON.stringify({ name: 'rf' }))
})
module.exports = router