'use strict';

define([
    'angular', 'banner'
], function(angular, chosen) {
    var moduleName = 'imgModule';
    angular
        .module(moduleName, [])
        .directive('bannerDirective', function() {
            return function(scope, elem, attrs) {
                $(elem).Xslider(scope.$eval(attrs.bannerDirective));
            };
        });
    return moduleName;
});
