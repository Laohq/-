// 这是简历路由模块
const express=require('express')
const router = express.Router()

//挂载路由

//导入路由处理函数模块
const resume_handler=require('../router_handler/resume')

//导入验证数据的中间件
const expressJoi = require('@escook/express-joi')
const {add_resumeInfo_schema}=require('../schema/user')

//获取简历信息(前端界面)
router.get('/get/font/:id', resume_handler.getResumeInfo1)
//获取简历信息的路由(后端界面)
router.get('/get/back/:choice', resume_handler.getResumeInfo2)
//提交简历信息路由
router.post('/add', expressJoi(add_resumeInfo_schema), resume_handler.addResumeInfo)
//修改简历信息路由
router.post('/update',expressJoi(add_resumeInfo_schema), resume_handler.updateResumeInfo)

module.exports=router