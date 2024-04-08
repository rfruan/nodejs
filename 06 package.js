// 默认情况下，使用 npm install 命令安装包的时候， 会自动安装最新版本的包。如果需要安装指定版本的包，可以在包名之后，通过 @ 符号指定具体的版本
// npm 规定，在项目根目录中， 必须提供一个叫做 package.json 的包管理配置文件。用来记录与项目有关的一些配置信息。例如：
// ⚫ 项目的名称、版本号、描述等
// ⚫ 项目中都用到了哪些包
// ⚫ 哪些包只在开发期间会用到
// ⚫ 那些包在开发和部署时都需要用到
//在项目开发中，一定要把 node_modules 文件夹，添加到 .gitignore 忽略文件中
//npm 命令只能在英文的目录下成功运行！所以，项目文件夹的名称一定要使用英文命名， 不要使用中文， 不能出现空格。
// npm uninstall  卸载包
// --save-dev 旨在开发时用
// 获取下载源镜像 npm config get registry
// 更换淘宝镜像 npm config set registry=https://registry.npmmirror.com
// 为了更方便的切换下包的镜像源，我们可以安装 nrm 这个小工具，利用 nrm 提供的终端命令，可以快速查看和切换下包的镜像源
// 查看所有可用镜像源 nrm ls
// 切换淘宝镜像源 nrm use taobao

//i5ting_toc 是一个可以把 md 文档转为 html 页面的小工具
// 转成html  i5ting_toc  -f *.md -o


// 一个规范的包，它的组成结构，必须符合以下 3 点要求：
// ① 包必须以单独的目录而存在
// ② 包的顶级目录下要必须包含 package.json 这个包管理配置文件
// ③ package.json 中必须包含 name， version， main 这三个属性，分别代表包的名字、 版本号、 包的入口


//模块在第一次加载后会被缓存。 这也意味着多次调用 require() 不会导致模块的代码被执行多次。
// 注意：不论是内置模块、用户自定义模块、还是第三方模块，它们都会优先从缓存中加载，从而提高模块的加载效率。
// 内置模块是由 Node.js 官方提供的模块， 内置模块的加载优先级最高
//使用 require() 加载自定义模块时，必须指定以 ./ 或 ../ 开头的路径标识符。
// 在加载自定义模块时，如果没有指定 ./ 或 ../这样的路径标识符，则 node 会把它当作内置模块或第三方模块进行加载
// 在使用 require() 导入自定义模块时，如果省略了文件的扩展名，则 Node.js 会按顺序分别尝试加载以下的文件：
// ① 按照确切的文件名进行加载
// ② 补全 .js 扩展名进行加载
// ③ 补全 .json 扩展名进行加载
// ④ 补全 .node 扩展名进行加载
// ⑤ 加载失败，终端报错

// 如果传递给 require() 的模块标识符不是一个内置模块，也没有以 ‘./’ 或 ‘../’ 开头，则 Node.js 会从当前模块的父目录开始，尝试从 /node_modules 文件夹中加载第三方模块。
// 如果没有找到对应的第三方模块， 则移动到再上一层父目录中，进行加载， 直到文件系统的根目录。


// 当把目录作为模块标识符，传递给 require() 进行加载的时候，有三种加载方式：
// ① 在被加载的目录下查找一个叫做 package.json 的文件，并寻找 main 属性，作为 require() 加载的入口
// ② 如果目录里没有 package.json 文件，或者 main 入口不存在或无法解析，则 Node.js 将会试图加载目录下的 index.js 文件。
// ③ 如果以上两步都失败了，则 Node.js 会在终端打印错误消息，报告模块的缺失： Error: Cannot find module 'xxx