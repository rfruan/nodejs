// path 模块是 Node.js 官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求。
//  path.join() 方法，用来将多个路径片段拼接成一个完整的路径字符串
//  path.basename() 方法,可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名
//path <string> 必选参数，表示一个路径的字符串， ext <string> 可选参数，表示文件扩展名，增加ext选项就不会显示后缀名，只显示符合的文件名
// 使用 path.extname() 方法，可以获取路径中的扩展名部分

const { log } = require('console')
const fs = require('fs')
const path = require('path')
const regCss = /<style>[\s\S]*<\/style>/  //任意字符会把因为匹配换行被等特殊字符而认不出反斜杠
const regJs = /<script>[\s\S]*<\/script>/
const originpath = path.join(__dirname, 'index.html')
//读取页面并拆分
fs.readFile(originpath, 'utf8', (err, data) => {
  if (err) console.log(err.message);
  else {
    const str = data.toString()
    // console.log(str)

    let css = regCss.exec(str)
    let js = regJs.exec(str)
    let html = data.replace(css, ' <link rel="stylesheet" href=".\/index.css">').replace(js, '<script src=".\/index.js"><\/script>')
    console.log(html)
    const basename = path.basename(originpath, '.html')
    const houzhui = path.extname(originpath)
    css[0] = css[0].replace('<style>', " ").replace('<\/style>', "")
    js[0] = js[0].replace('<script>', " ").replace('<\/script>', "")
    console.log(css[0], js[0])
    // 写入文件
    fs.writeFile(path.join(__dirname, `clock/${basename}.css`), css[0], err => console.log(err))
    fs.writeFile(path.join(__dirname, `clock/${basename}.js`), js[0], err => console.log(err))
    fs.writeFile(path.join(__dirname, `clock/${basename}${houzhui}`), html, err => console.log(err))
  }
})