'use strict';

define([
    'angular', 'jquery'
], function(angular, $) {
    var moduleName = 'httpModule';
    angular
        .module(moduleName, [])
        .factory('httpService', ['$http', function($http) {
            var doRequest = function(opt) {
                var success = opt.success;

                if (success) {
                    opt.success = null;
                    delete opt.success;
                }
                var _httpDefaultOpts = {
                        method: 'POST', // GET/DELETE/HEAD/JSONP/POST/PUT
                        baseUrl: 'http://oa2.epoint.com.cn/SCKFrontService/appservice/',
                        url: '',
                        params: {}, // 拼接在url的参数
                        data: {}, //参数
                        cache: false, // boolean or Cache object
                        success: function(response) {
                            if (success) {
                                success.call(this, response.data.EpointDataBody ? response.data.EpointDataBody.DATA.UserArea : response.data.UserArea);
                            }
                        }, // ajax 执行成功 执行函数 
                        error: function(response) {
                                console.log("error");
                            } // ajax 执行失败 执行函数
                    },
                    opts = $.extend({}, _httpDefaultOpts, opt);
                return $http({
                    method: opts.method,
                    url: opts.baseUrl + opts.url,
                    params: opts.params,
                    data: JSON.stringify(opts.data),
                    cache: opts.cache
                }).then(opts.success, opts.error);
            };
            return {
                list: function(opts) {
                    return doRequest(opts);
                }
            };

        }]);
    return moduleName;
});
