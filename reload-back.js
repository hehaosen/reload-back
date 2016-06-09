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

    // 当页面刷新时,不记录url地址
    if (localStorage.reloadBackUrl.split(__SEPARATOR__)[localStorage.reloadBackUrl.split(__SEPARATOR__).length - 2] != window.location.href) {
        localStorage.reloadBackUrl += window.location.href + __SEPARATOR__;
    }

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

    /**
     * 获取回退几页前的url
     * @param step
     * @returns {*}
     */

    function goBackUrl ( step ) {

        step = step ? step : 0 ;

        if ( window.localStorage ) {
            return localStorage.reloadBackUrl.split(__SEPARATOR__)
                [localStorage.reloadBackUrl.split(__SEPARATOR__).length - 2 - step];
        } else {
            // 执行cookie获取
        }
    }

    this.goBack = function ( step ) {

        var hrefUrl = goBackUrl(step);

        if ( hrefUrl ) {
            window.location.href = hrefUrl;
        } else {
            console.error('找不到页面');
        }
    }
};

reloadBack = new reloadBack();
