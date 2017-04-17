'use strict';

define([
    'angular', 'tabview'
], function(angular, tabview) {
    var moduleName = 'tabviewModule';
    angular
        .module(moduleName, [])
        .directive('tabviewDirective', function() {
            new TabView(scope.$eval(attrs.tabviewDirective));
        });
    return moduleName;
});
