
$(function () {
    //注册与登录切换功能
    $('#signIn').on('click', () => {
        $('.container').removeClass("right-panel-active")
    })
    $('#signUp').on('click', () => {
        $('.container').addClass("right-panel-active")
    })
    //前端的表单信息正则表达式验证 避免发送无用请求
    var username = document.querySelector('#username')
    var pwd1 = document.querySelector('#pwd1')
    var pwd2 = document.querySelector('#pwd2')
    var tip1 = document.querySelector('.tip1')
    var tip2 = document.querySelector('.tip2')
    var regusername = /^[\u0391-\uFFE5\w]+$/ //用户名只能包括中文字、英文字母、数字和下划线
    var regpassword = /^[a-zA-Z0-9_-]{6,16}$/ //密码包含6-16位大小写字母或者数字下划线短横线    
    regexp1(username, regusername)
    regexp2(pwd1, regpassword)
    function regexp1(ele, reg) {
        ele.onblur = function () {
            if (!reg.test(this.value)) {
                tip1.innerHTML = '用户名只能包括中文字、英文字母、数字和下划线'
            } else {
                tip1.innerHTML = ''
            }
        }
    }
    function regexp2(ele, reg) {
        ele.onblur = function () {
            if (!reg.test(this.value)) {
                tip2.innerHTML = '密码包含6-16位大小写字母或者数字下划线短横线'
            } else {
                tip2.innerHTML = ''
            }
        }
    }


    // 注册表单提交
    $('#form1').submit((e) => {
        e.preventDefault()
        var val1 = pwd1.value
        var val2 = pwd2.value
        if (val1 != val2) {
            return alert('两次密码不一致')
        }
        data = {
            username: username.value,
            password: pwd1.value,
        }
        $.ajax({
            method: 'POST',
            url: '/api/reguser',
            data: data,
            success: (res) => {
                if (res.status !== 0) {
                    return alert(res.message)
                } else {
                    alert('注册成功')
                    $('#signIn').click()
                }
            }
        })
    })

    // 登录表单提交
    $('#form2').submit((e) => {
        e.preventDefault()
        var data = {
            username: $('#l-username').val(),
            password: $('#l-password').val()
        }
        $.ajax({
            method: 'POST',
            url: '/api/login',
            data: data,
            success: (res) => {
                if (res.status !== 0) {
                    alert('输入密码或账号有误')
                } else {
                    alert('登录成功')
                    console.log(res.token);
                    //将登录成功的token字符串，保存到localStorage中
                    localStorage.setItem('token', res.token)
                    location.href = '/工作室报名网站/index.html'
                }
            }
        })
    })
})
