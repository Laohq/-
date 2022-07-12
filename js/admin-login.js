
$(function () {
    $('.register').on('click', () => {
        $('.loginBox').hide()
        $('.registerBox').show()
    })

    $('.login').on('click', () => {
        $('.registerBox').hide()
        $('.loginBox').show()
    })

    //验证表单数据避免发送无用请求
    var regusername = /^[\u0391-\uFFE5\w]+$/ //用户名只能包括中文字、英文字母、数字和下划线
    var regpassword = /^[a-zA-Z0-9_-]{6,16}$/ //密码包含6-16位大小写字母或者数字下划线短横线
    var username = document.querySelector('.r-username')
    var password1 = document.querySelector('.r-password')
    var password2 = document.querySelector('.c-password')
    var tip1 = document.querySelector('.tip1')
    var tip2 = document.querySelector('.tip2')
    regexp1(username, regusername)
    regexp2(password1, regpassword)
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

    //注册功能实现
    $('#f2').submit(function (e) {
        e.preventDefault();
        var val1 = password1.value
        var val2 = password2.value
        if (val1 != val2) {
            return alert('两次密码不一致')
        }
        var data = {
            username: $('.r-username').val(),
            password: $('.r-password').val()
        }
        var data2 = $(this).serialize()
        console.log(data2);
        $.ajax({
            method: 'POST',
            url: '/api/reguser',
            data: data,
            success: (res) => {
                if (res.status !== 0) {
                    return alert(res.message)
                } else {
                    alert('注册成功')
                    $('.login').click()
                }
            }
        })
    });

    // 登录功能实现
    $('#f1').submit((e) => {
        e.preventDefault()
        var data = {
            username: $('.username').val(),
            password: $('.password').val()
        }
        // var data1 = $('#f1').serialize()
        // console.log(data1); // 存在多个form标签会出现第二个form标签下面的数据获取不到
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
                    location.href='/index1.html'
                }
            }
        })
    })






})