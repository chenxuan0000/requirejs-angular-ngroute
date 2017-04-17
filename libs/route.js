define([
    'angular',
    'require',
    'angular-route',
    'angularCSS',
    'directives/select',
    'httpService/httpService',
    'directives/selectLi'
], function(angular, require, route, angularCSS, select, http, selectLi) {
    var app = angular.module('webapp', ['ngRoute', 'angularCSS', select, http, selectLi]);

    // 控制nav高亮
    app.controller('headControl', ['$scope', '$location', function($scope, $location) {
        if ($location.path() === '') {
            $location.path('/');
        }
        $scope.location = $location;
    }]);

    // 注册监听ng-repeat状态指令
    app.directive('repeatFinish', function($timeout) {
        return {
            restrict: 'A',
            link: function(scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function() {
                        scope.$emit('tabview');
                    });
                }
            }
        };
    });
    // 路由配置
    app.config(['$routeProvider', '$controllerProvider', function($routeProvider, $controllerProvider) {
        $routeProvider
            .when('/index', {
                template: '',
                controller: 'module1Controller',
                css: 'css/index.css',
                resolve: {
                    keyName: function($route, $q) {
                        var deferred = $q.defer();
                        require(['module1/module1.js'], function(module) {
                            $controllerProvider.register('module1Controller', module.controller);
                            $route.current.template = module.tpl;
                            deferred.resolve();
                        });

                        return deferred.promise;
                    }
                }
            })
            .when('/caselib', {
                template: '',
                controller: 'module2Controller',
                css: 'css/case.css',
                resolve: {
                    keyName: function($route, $q) {
                        var deferred = $q.defer();
                        require(['module2/module2.js'], function(module) {
                            $controllerProvider.register('module2Controller', module.controller);
                            $route.current.template = module.tpl;
                            deferred.resolve();
                        });
                        return deferred.promise;
                    }
                }
            })
            .otherwise({
                redirectTo: '/index'
            });
    }]);

    return app;
});
