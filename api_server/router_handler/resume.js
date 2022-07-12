// 这是简历路由处理模块

//导入数据库操作模块
const db = require('../db/index.js')

//获取用户简历信息的处理函数(前端界面)
exports.getResumeInfo1 = (req, res) => {
  //定义查询用户信息的SQL语句
  const sql = `select * from entry_blank_resume where Id=?`
  db.query(sql, req.params.id, (err, results) => {
      // 执行SQL语句失败
    if (err) return res.cc(err)
      //执行SQL语句成功，用户信息获取成功
      res.send({
          status: 0,
          message: '获取简历信息成功！',
          data:results[0]
      })
      
      
  })
}

//获取用户简历信息的处理函数(后端界面)
exports.getResumeInfo2 = (req, res) => {
    //定义查询用户信息的SQL语句
    const sql = `select * from entry_blank_resume where choice=?`
    db.query(sql, req.params.choice, (err, results) => {
        // 执行SQL语句失败
        if (err) return res.cc(err)

        //执行SQL语句成功，用户信息获取成功
        res.send({
            status: 0,
            message: '获取简历信息成功！',
            data:results
        })
    })
}



//上传用户简历信息的处理函数
exports.addResumeInfo = (req, res) => {
  //查询简历信息是否重复上传
  const sqlStr = `select * from entry_blank_resume where Id=?`
  db.query(sqlStr, req.body.Id, (err, results) => {
    //执行SQL失败语句
    if (err) return res.cc(err)
    if (results.length !== 0) return res.cc('你的简历信息已提交，如需更改请点击修改信息上传最新简历')
    //定义上传简历信息的SQL语句
    const sql = `insert into entry_blank_resume set ?`
    db.query(sql, req.body, (err, results) => {
        //执行SQL语句失败
        if (err) return res.cc(err)
    
        // 执行 SQL 语句成功，但是影响行数不等于 1
        if (results.affectedRows !== 1) return res.cc('上传简历信息失败！')

        // 上床简历信息成功成功
        res.cc('上传简历信息成功', 0)
    })
  })


}

//修改用户简历信息的处理函数
exports.updateResumeInfo = (req, res) => {
    // 定义待执行的 SQL 语句
    const sql = `update entry_blank_resume  set ? where Id=?`
    // 调用 db.query() 执行 SQL 语句并传递参数
    db.query(sql, [req.body, req.body.Id], (err, results) => {
      // 执行 SQL 语句失败
        if (err) return res.cc(err)
      // 执行 SQL 语句成功，但是影响行数不等于 1
        if (results.affectedRows !== 1) return res.cc('更新简历的基本信息失败！')
      // 成功
        res.cc('更新简历信息成功！', 0)
    })
}