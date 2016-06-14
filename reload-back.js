/*
 * 返回页面时刷新 v0.1.1
 * Date: 2016-6-3
 * author:大力神
 * http://www.github.com/hehaosen
 */

var reloadBack = function () {

    // 上下文

    var _self = this ;

    // 是否支持localStorage

    var __storange__ = Boolean(window.localStorage);

    /**
     * 存储当前url,用于为以后跳转
     */

    _self.addUrl = function () {
        // 当页面刷新时,不记录url地址
        if (__storange__) {
            window.localStorage.nowUrl = window.location.href;
        } else {
            // 执行cookie
        }
    };

    /**
     * 监听原生返回,如果是原生返回刷新页面
     */
    _self.listenerBack = function () {

        var interEvent  = function () {
            if (__storange__) {
                if ( window.localStorage.nowUrl != window.location.href) {
                    location.reload();
                }
            } else {
                // 执行cookie
            }

        };

        setInterval(interEvent, 100);
    };
};
reloadBack = new reloadBack();
reloadBack.addUrl();
reloadBack.listenerBack();