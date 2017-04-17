'use strict';

require.config({
    paths: {
        'angular': 'angular.min',
        'jquery': 'jquery-1.11.0.min',
        'banner': 'banner',
        'chosen': 'chosen/chosen.jquery.min',
        'tabview': 'tabview',
        'angular-route': 'angular-route.min',
        'angularCSS': 'angular-css.min',
        'text': 'text'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'jquery': {
            exports: '$'
        },
        'banner': {
            deps: ['jquery'],
            exports: 'Xslider'
        },
        'tabview': {
            deps: ['jquery'],
            exports: 'tabview'
        },
        'chosen': {
            deps: ['jquery'],
            exports: 'chosen'
        },
        'angular-route': {
            deps: ['angular'],
            exports: 'ngRouteModule'
        },
        'angularCSS': {
            deps: ['angular'],
            exports: 'cssModule'
        }
    }
});

require(['angular', 'route'], function(angular) {
    angular.bootstrap(document, ['webapp']);
});
