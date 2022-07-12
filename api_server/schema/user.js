// 导入定义验证规则的包
const joi = require('@hapi/joi')

// 定义用户名和密码的验证规则
const username = joi.string().alphanum().min(1).max(10).required()
const password = joi
  .string()
  .pattern(/^[\S]{6,12}$/)
  .required()

// 定义 id的验证规则
const Id = joi.number().integer().min(1).required()

//定义 nickname的验证规则
// const nickname = joi.string().required()

// // 定义验证 avatar 头像的验证规则
// const avatar = joi.string().dataUri().required()

//定义验证resume的验证规则
const name=joi.string().required()
const sex = joi.string().required()
const major = joi.string().required()
const choice = joi.string().required()
const studentId = joi
  .string()
  .pattern(/^^3\d{9}$$/)
  .required()
const reason=joi.string().required().allow('')
const introduce = joi.string().required().allow('')
const exprience =joi.string().required().allow('')
const QQ=joi
  .string()
  .pattern(/^[1-9][0-9]{4,9}$/)
  .required()

// 定义验证注册和登录表单数据的规则对象
exports.reg_login_schema = {
  body: {
    username,
    password,
  },
}

// // 验证规则对象 - 更新用户基本信息
// exports.update_userinfo_schema = {
//   // 需要对 req.body 里面的数据进行验证
//   body: {
//     Id,
//     nickname,
//   },
// }

// // 验证规则对象 - 更新密码
// exports.update_password_schema = {
//   body: {
//     oldPwd: password,
//     newPwd: joi.not(joi.ref('oldPwd')).concat(password),
//   },
// }

// // 验证规则对象 - 更新头像
// exports.update_avatar_schema = {
//   body: {
//     avatar
//   }
// }

//验证规则对象-简历信息
exports.add_resumeInfo_schema = {
  body: {
    Id,
    name,
    sex,
    major,
    choice,
    studentId,
    reason,
    introduce,
    exprience,
    QQ
    }
}
