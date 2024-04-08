// Node.js 中根据模块来源的不同，将模块分为了 3 大类，分别是：
// 每个模块有独立作用域，防止全局变量污染，可以向外共享成员
// ⚫ 内置模块（内置模块是由 Node.js 官方提供的，例如 fs、 path、 http 等）
// ⚫ 自定义模块（用户创建的每个 .js 文件，都是自定义模块）
// ⚫ 第三方模块（由第三方开发出来的模块，并非官方提供的内置模块，也不是用户创建的自定义模块， 使用前需要先下载

// require() 模块时，得到的永远是 module.exports 指向的对象
//为了简化向外共享成员的代码， Node 提供了 exports 对象。 默认情况下， exports 和 module.exports 指向同一个对象。
// 最终共享的结果，还是以 module.exports 指向的对象为准

// CommonJS 规定：
// ① 每个模块内部， module 变量代表当前模块。
// ② module 变量是一个对象，它的 exports 属性（即 module.exports） 是对外的接口。
// ③ 加载某个模块，其实是加载该模块的 module.exports 属性。 require() 方法用于加载模块。


// 1. {age:12}
// exports.name = 'rf'

// module.exports = {
//   age: 12
// }

// 2.{age:12}
// module.exports = {
//   age: 12
// }
// exports.name = 'rf'

// 3.{ name: 'rf', gener: 'male' }
// exports.name = 'rf'
// module.exports.gener = 'male'

// 4.  male
// exports.name = 'rf'
// module.exports = 'male'

//5.{ name: 'rf', age: 12 }
// exports = {
//   name: 'rf',
//   age: 12
// }

// module.exports = exports

//6. { name: 'rf', age: 12, gender: 'male' }
exports = {
  name: 'rf',
  age: 12
}

module.exports = exports
module.exports.gender = 'male'