'use strict';

define([
    'angular', 'chosen'
], function(angular, chosen) {
    var moduleName = 'selectModule';
    angular
        .module(moduleName, [])
        .directive('selectDirective', function() {
            return function(scope, elem, attrs) {
                $(elem).chosen({
                    disable_search: true
                }).change(function(event, opt) {

                });
            };
        });
    return moduleName;
});
