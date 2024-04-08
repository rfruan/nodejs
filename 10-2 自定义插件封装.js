
const qs = require('querystring')
function body(req, res, next) {
  // 监听 req 对象的 data 事件，来获取客户端发送到服务器的数据
  let str = ""
  //客户端会把数据切割后， 分批发送到服务器。所以 data 事件可能会触发多次，每一次触发 data 事件时， 获取到数据只是完整数据的一部分，需要手动对接收到的数据进行拼接
  req.on('data', (chunk) => {
    str += chunk
  })
  // req 的 end 事件中， 拿到并处理完整的请求体数据。
  req.on('end', () => {
    console.log(str);
    // Node.js 内置了一个 querystring 模块， 专门用来处理查询字符串。通过这个模块提供的 parse() 函数，可以把查询字符串，解析成对象的格式
    const bd = qs.parse(str)
    //上游的中间件和下游的中间件及路由之间， 共享同一份 req 和 res。因此，我们可以将解析出来的数据，挂载为 req的自定义属性，命名为 req.body，供下游使用
    res.body = bd
    next()
  })

}
//把自定义的中间件函数， 封装为独立的模块，
module.exports = body