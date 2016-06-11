/*
 * 返回页面时刷新 v0.0.1
 * Date: 2016-6-3
 * author:大力神
 * http://www.github.com/hehaosen
 */

var reloadBack = function () {

    var _self = this ;

    // 分隔符

    var __SEPARATOR__ = '|||';

    /**
     * 获取已经存储的url
     * @returns {string|*}
     */

    function getUrlTeam () {

        if ( window.localStorage ) {
            return localStorage.reloadBackUrl ? localStorage.reloadBackUrl : '';
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

        return getUrlTeam().split(__SEPARATOR__)
            [getUrlTeam().split(__SEPARATOR__).length - 2 - step];
    }

    _self.goBack = function ( step ) {

        var hrefUrl = goBackUrl(step);

        if ( hrefUrl ) {
            window.location.href = hrefUrl;
        } else {
            console.error('无法获取上一级页面');
        }
    };

    /**
     * 存储当前url,用于为以后跳转
     */

    _self.addUrl = function () {
        // 当页面刷新时,不记录url地址
        if (goBackUrl() != window.location.href) {
            localStorage.reloadBackUrl = localStorage.reloadBackUrl ? localStorage.reloadBackUrl : '';
            localStorage.reloadBackUrl += window.location.href + __SEPARATOR__;
        }
    };

    _self.clearUrl = function () {
        if ( window.localStorage ) {
            window.localStorage.removeItem('reloadBackUrl');
        }
    }

};
reloadBack = new reloadBack();
reloadBack.addUrl();