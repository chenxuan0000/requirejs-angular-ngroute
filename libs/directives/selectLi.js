'use strict';

define([
    'angular'
], function(angular) {
    var moduleName = 'selectLi';
    angular
        .module(moduleName, [])
        .directive('liButton', function() {
            return function(scope, elem, attrs) {
                $(elem).click(function() {
                    if (scope.ClickedButton) {
                        //这里是点击后的操作,就是访问过后 
                       
                    }
                    scope.ClickedButton = elem
                    $(elem).addClass("selected").siblings("li").removeClass("selected")
                })
            };
        });
    return moduleName;
});
