const express = require('express')
const router = express.Router()

//get 接口
router.get('/get', (req, res) => {
  const query = req.query
  res.send({
    status: 0,
    msg: 'success',
    data: query
  })
})

router.post('/post', (req, res) => {
  //如果要获取 URL-encoded 格式的请求体数据，必须配置中间件 app.use(express.urlencoded({ extended: false }))
  const body = req.body
  res.send({
    status: 0,
    msg: "success",
    data: body
  })
})

module.exports = router

