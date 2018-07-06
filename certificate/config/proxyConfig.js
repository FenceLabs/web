module.exports = {
    proxy: {
        '/live': { //将www.exaple.com印射为/apis
            target: 'http://47.104.29.25:8089/', // 接口域名
            secure: false, // 如果是https接口，需要配置这个参数
            changeOrigin: true, //是否跨域            
        },

        '/token': { //将www.exaple.com印射为/apis
            target: 'http://api.flowsns.com/', // 接口域名
            secure: false, // 如果是https接口，需要配置这个参数
            changeOrigin: true, //是否跨域  

        },

    }
}