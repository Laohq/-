$(document).ready(function () {
    if (!localStorage.getItem('Id')) {
        var id = Math.round(Math.random() * 10000)
        localStorage.setItem('Id', id)
    } else {
        let id = localStorage.getItem('Id')
        $.ajax({
            method: 'GET',
            url: '/my/resume/get/font/'+id,
            success: (res) => {
                console.log(res.data);
                //这里需要用模板引擎渲染内容到简历的input框中
            }
        })
    }
    
    let flag=0;
    $('span').click(function() {
        if(flag==0) {
            flag=1;
            $(this).siblings("ul").slideDown("slow");
        }else {
            flag=0;
            $(this).siblings("ul").slideUp("slow");
        }

    })
    $('ul li').click(function() {
        let text=$(this).text();
        $(this).parent().siblings("input").val(text);
        $(this).parent().slideUp("slow");
        if($('.choice input').val()) {
            $('.reason').slideDown("slow");
            $('.reason .title').text(`选择${$('.choice input').val()}的原因是`);
            console.log("aaa");
        }
    })


    $('.submit').on('click', function (e) {
        e.preventDefault();
        let name = $('.username').val()
        let sex = $('.usersex').val()
        let major = $('.usermajor').val()
        let QQ = $('.userQQ').val()
        let choice=$('.userchoice').val()
        let studentId = $('.userstudentId').val()
        let introduce = $('.userintroduce').val()
        let reason = $('.userreason').val()
        let exprience = $('.userexprience').val()
        let Id = localStorage.getItem('Id')
        let data = {
            name,
            sex,
            major,
            QQ,
            choice,
            studentId,
            introduce,
            reason,
            exprience,
            Id,
        }
        $.ajax({
            method: 'POST',
            url: '/my/resume/add',
            data: data,
            success: (res) => {
                if (res.status !== 0) {
                    return alert('上传简历失败，信息必须全部填写，注意QQ与学号的格式。同时，如果提交过了信息请点击修改信息上传最新简历信息！')
                } else {
                    alert('上传简历成功')
                    $(this).attr('disabled', 'true')
                    $(this).css('backgroundColor','grey')
                }
            }
        })
        
    })

    $('.update').on('click', function (e) {
        e.preventDefault();
        let name = $('.username').val()
        let sex = $('.usersex').val()
        let major = $('.usermajor').val()
        let QQ = $('.userQQ').val()
        let choice=$('.userchoice').val()
        let studentId = $('.userstudentId').val()
        let introduce = $('.userintroduce').val()
        let reason = $('.userreason').val()
        let exprience = $('.userexprience').val()
        let Id =localStorage.getItem('Id')
        let data = {
            name,
            sex,
            major,
            QQ,
            choice,
            studentId,
            introduce,
            reason,
            exprience,
            Id,
        }
        console.log(data);
        $.ajax({
            method: 'POST',
            url: '/my/resume/update',
            data: data,
            success: (res) => {
                if (res.status !== 0) {
                    return alert('更新简历信息失败，信息必须全部填写，注意QQ与学号的格式。 修改后请重新点击修改信息按钮提交最新简历信息')
                } else {
                    alert(res.message)
                }
            }
        })
    })
})