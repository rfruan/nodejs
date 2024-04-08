// 配置MySQL
const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '123456',
  database: 'mydb'
})

//查询
// db.query('select * from users limit 10', (err, res) => {
//   console.log(res)
// })
//插入
// const user = { username: 'rf', id: '123' }
// const sql = 'insert into test (name,id) values(?,?)'
// db.query(sql, [user.username, user.id], (err, res) => {
//   console.log('success');
// })
// const user = { name: 'rf', id: '12345' }
// const sql = 'insert into test set ?'
// db.query(sql, user,  (err, res) => {
//   console.log('success');
// })

//更新
// const user = { id: 123, name: 'aaa' }
// const sql = 'update test set name=? where id =?'
// db.query(sql, [user.name, user.id], (err, res) => {
//   console.log('success');
// })

// const user = { id: 12345, name: 'aaa' }
// const sql = 'update test set ? where id =?'
// db.query(sql, [user, user.id], (err, res) => {
//   console.log('success');
// })

//删除
// const sql = 'delete from test where id =?'
// db.query(sql, 12345, (err, res) => {
//   console.log('success');
// })
//使用 DELETE 语句，会把真正的把数据从表中删除掉。为了保险起见， 推荐使用标记删除的形式，来模拟删除的动作
db.query('update test set status =1 where id =?', 123, (err, res) => {
  console.log('success');
})
