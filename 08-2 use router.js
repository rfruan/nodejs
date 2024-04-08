const router = require('./08 路由.js')
const express = require('express')
const app = express()
//use注册全局中间件
app.use('/public', router)
app.listen('80', () => {
  console.log('listen');
})