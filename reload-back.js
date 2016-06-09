/*
 * 返回页面时刷新 v0.0.1
 * Date: 2016-6-3
 * author:大力神
 * http://www.github.com/hehaosen
 */



// 分隔符

var __SEPARATOR__ = '|||';


/**
 * 存储当前url,用于为以后跳转
 */

if ( window.localStorage ) {
    localStorage.reloadBackUrl = localStorage.reloadBackUrl ? localStorage.reloadBackUrl : '';
    localStorage.reloadBackUrl += window.location.href + __SEPARATOR__;
} else {
    // 执行cookie存储
}

var reloadBack = function () {


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
    goBackUrl();
    console.log(__SEPARATOR__);
    function goBackUrl ( step ) {
        step = step ? setp : 0 ;

        var urlBox;

        if ( window.localStorage ) {
            urlBox = localStorage.reloadBackUrl.split(__SEPARATOR__);
            console.log(urlBox);
        } else {
            // 执行cookie获取
        }
    }


};