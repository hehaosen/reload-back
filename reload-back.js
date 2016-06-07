/*
 * 返回页面时刷新 v0.0.1
 * Date: 2016-6-3
 * author:大力神
 * http://www.github.com/hehaosen
 */

if(window.localStorage){
    // 执行localStoreage方法
}else{
    // 执行cookie方
}

var reloadBack = function () {

    // 分隔符
    var separator = '|-|';

    // 存储当前url
    function saveHref () {
        if (window.localStorage) {
            localStorage.reloadBackUrl += window.location.href + separator;
        } else {
            // 执行cookie存储
        }
    }

    // 获取已经存储的url
    function getUrl () {
        if (window.localStorage) {
            return localStorage.reloadBackUrl;
        } else {
            // 执行cookie获取
        }
    }
};