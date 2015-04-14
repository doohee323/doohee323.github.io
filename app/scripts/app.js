'use strict';

/**
 * @ngdoc overview
 * @name doohee323.github.io
 * @description
 * # doohee323.github.io
 *
 * Main module of the application.
 */

var config = {
	debug: true,
};
 
angular
  .module('doohee323.github.io', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.router',
  ]).constant('config', config)
.config(['$stateProvider', '$urlRouterProvider', '$provide',
  function ($stateProvider, $urlRouterProvider, $provide) {
  
		$stateProvider.state('org', {
			templateUrl : '/app/views/default.html',
			controller : 'BaseCtrl',
			abstract : true
		  }).state('init', {
				url: '',
				templateUrl: '/app/views/main.html',
				controller: 'MainCtrl'
		});
  
}]);
