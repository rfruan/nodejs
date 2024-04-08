// console.log('hello js')
//fs 模块是 Node.js 官方提供的、用来操作文件的模块。它提供了一系列的方法和属性，用来满足用户对文件的操作需求。
// ⚫ fs.readFile() 方法，用来读取指定文件中的内容
// 参数1： 必选参数，字符串，表示文件的路径，
// 参数2：可选参数，表示以什么编码格式来读取文件
//  参数3： 必选参数，文件读取完成后，通过回调函数拿到读取的结果
// ⚫ fs.writeFile() 方法，用来向指定的文件中写入内容
// 参数1： 必选参数，需要指定一个文件路径的字符串，表示文件的存放路径。
// 参数2： 必选参数，表示要写入的内容。
// 参数3：可选参数，表示以什么格式写入文件内容，默认值是 utf8。
// 参数4： 必选参数，文件写入完成后的回调函数

//使用 fs 文件系统模块，将素材目录下成绩.txt文件中的考试数据，整理到成绩-ok.txt文件中
const fs = require('fs')

fs.readFile('./成绩.txt', 'utf8', (err, data) => {
  if (err) console.log("文件读取失败" + err.message)
  else {
    console.log(data.toString())
    let str = data.replace(/ /g, '\n')
    str = str.replace(/=/g, ":")
    console.log(str)
    fs.writeFile('./grade.txt', str, (err) => {
      if (err)
        console.log(err)
      else {
        console.log('写入成功')
      }
    })
  }
})

//fs.writeFile() 方法只能用来创建文件，不能用来创建路径,重复调用 fs.writeFile() 写入同一个文件，新写入的内容会覆盖之前的旧内容