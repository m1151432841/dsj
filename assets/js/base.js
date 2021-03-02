//注意：每次调用$.get() 或 $.post() 或 $.ajax()的时候，会先调用ajaxPrefilter这个函数
$.ajaxPrefilter(function(options) {
    //在发起真正的ajax请求之前，拼接根路径
    options.url = 'http://ajax.frontend.itheima.net' + options.url
        // options.url = 'http://api-breakingnews-web.itheima.net/' + options.url

    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token')
        }
    }

    options.complete = function(res) {
        // console.log(res);


        if (res.responseJSON.status === 1 && res.responseJSON.message === "身份认证失败！") {
            // console.log(11);

            localStorage.removeItem('token')
            location.href = '/login.html'
        }

    }


})