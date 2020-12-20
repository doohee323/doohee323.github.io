'use strict';

/**
 * @ngdoc overview
 * @name doohee323.github.io
 * @description # doohee323.github.io
 * 
 * Main module of the application.
 */

var config = {
	debug : true,
	updated_dt : '12 / 20 / 2020'
};

angular.module('doohee323.github.io', [ 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ui.router', ]).constant(
		'config', config).config(
		[ '$stateProvider', '$urlRouterProvider', '$provide', function($stateProvider, $urlRouterProvider, $provide) {

			$stateProvider.state('org', {
				templateUrl : 'views/default.html',
				controller : 'BaseCtrl',
				abstract : true
			}).state('init', {
				url : '',
				templateUrl : 'views/main.html',
				controller : 'MainCtrl'
			}).state('se', {
				url : '',
				templateUrl : 'views/se.html',
				controller : 'SeCtrl'
			}).state('devops', {
				url : '',
				templateUrl : 'views/devops.html',
				controller : 'DevOpsCtrl'
			});

		} ]).run([ '$rootScope', function($rootScope) {
			$rootScope.updated_dt = config.updated_dt;

} ]);
