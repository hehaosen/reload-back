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

    function getBackUrl ( step ) {

        step = step ? step : 0 ;

        return getUrlTeam().split(__SEPARATOR__)
            [getUrlTeam().split(__SEPARATOR__).length - 2 - step];
    }

    /**
     * 返回页面
     * @param step 不传值时返回上一页
     */

    _self.goBack = function ( step ) {

        var hrefUrl = getBackUrl(step);

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
        if (getBackUrl() != window.location.href) {
            localStorage.reloadBackUrl = localStorage.reloadBackUrl ? localStorage.reloadBackUrl : '';
            localStorage.reloadBackUrl += window.location.href + __SEPARATOR__;
        }
    };

    /**
     * 清除url地址
     */
    _self.clearUrl = function () {
        if ( window.localStorage ) {
            window.localStorage.removeItem('reloadBackUrl');
        }
    };

    /**
     * 监听原生返回,如果是原生返回刷新页面
     */
    _self.listenerBack = function () {

        var interEvent  = function () {

            console.log (getBackUrl(-1));
            if ( getBackUrl(-1) != window.location.href && getBackUrl(-1) != '') {
                console.log('刷新刷新!!!!');
            }
        };

        setInterval(interEvent, 100);
    };
};
reloadBack = new reloadBack();
reloadBack.addUrl();