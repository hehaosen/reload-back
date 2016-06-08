/*
 * 返回页面时刷新 v0.0.1
 * Date: 2016-6-3
 * author:大力神
 * http://www.github.com/hehaosen
 */


/**
 * 存储当前url
 */

if ( window.localStorage ) {
    localStorage.reloadBackUrl += window.location.href + separator;
} else {
    // 执行cookie存储
}

var reloadBack = function () {

    // 分隔符
    var separator = '|||';

    /**
     * 获取已经存储的url
     * @returns {string|*}
     */

    function getUrl () {
        if ( window.localStorage ) {
            return localStorage.reloadBackUrl;
        } else {
            // 执行cookie获取
        }
    }

    function goBackUrl ( step ) {
        step = step ? setp : 0 ;

        var urlBox;

        if ( window.localStorage ) {
            urlBox = localStorage.reloadBackUrl.split(separator);
            console.log(urlBox);
        } else {
            // 执行cookie获取
        }
    }
};