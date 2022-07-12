$(document).ready(function() {
    $('.group_induce').click(function() {
        $(this).find('ul').slideToggle("slow");
    })
    $('.learning-paths_induce').click(function() {
        $(this).find('ul').slideToggle("slow");
    })

// 轮播图引入的样式
    var swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

// 点击组别介绍
    $('.ic').on('click', ()=>{
        $('.group_introduce').siblings().css('display', 'none')
        $('.group_introduce').css('display','block')
        $('.ic_introduce').siblings().css('display', 'none')
        $('.ic_introduce').css('display','block')
    })
    $('.embedded').on('click',()=> {
        $('.group_introduce').siblings().css('display', 'none')
        $('.group_introduce').css('display','block')
        $('.embedded_introduce').siblings().css('display', 'none')
        $('.embedded_introduce').css('display','block')
    })
    $('.front-end').on('click', ()=>{
        $('.group_introduce').siblings().css('display', 'none')
        $('.group_introduce').css('display','block')
        $('.front-end_introduce').siblings().css('display', 'none')
        $('.front-end_introduce').css('display','block')
    })

//点击工作室奖项
    $('.award_induce').on('click', () => {
        $('.award_introduce').siblings().css('display', 'none')
        $('.award_introduce').css('display','block')
    })
//点击学习路线介绍
$('.ic_paths').on('click', ()=>{
    $('.learning-paths_introduce').siblings().css('display', 'none')
    $('.learning-paths_introduce').css('display','block')
    $('.ic_learning-paths').siblings().css('display', 'none')
    $('.ic_learning-paths').css('display','block')
})
$('.embedded_paths').on('click',()=> {
    $('.learning-paths_introduce').siblings().css('display', 'none')
    $('.learning-paths_introduce').css('display','block')
    $('.embedded_learning-paths').siblings().css('display', 'none')
    $('.embedded_learning-paths').css('display','block')
})
$('.front-end_paths').on('click', ()=>{
    $('.learning-paths_introduce').siblings().css('display', 'none')
    $('.learning-paths_introduce').css('display','block')
    $('.front-end_learning-paths').siblings().css('display', 'none')
    $('.front-end_learning-paths').css('display','block')
})

//点击报名模块
$('.registration').on('click', () => {
    $('.registration_module').siblings().css('display', 'none')
    $('.registration_module').css('display','block')
})

//点击提交简历按钮跳转到上传简历页面
    $('.resume').on('click', () => {
        location.href='resume.html'
    })
})