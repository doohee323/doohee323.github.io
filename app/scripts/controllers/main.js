'use strict';

/**
 * @ngdoc object
 * @name topzone.cmsApp.controller: mainCtrl
 * 
 * @description
 * This is Main Contorller
 *
 */
 
angular.module('doohee323.github.io')
  .controller('MainCtrl', function($scope, $http, $location, $state) {

	$scope.mail_title = 'Dewey\'s personal apps!';
	$scope.slogan = 'with java, javascript(node.js) and python.';

	$scope.sites = [
		{
			name : 'node.js, angular.js',
			image : 'images/6.png',
			desc : 'Content Management System',
			url : 'http://52.0.156.206:3003'
		},
		{
			name : 'Play!, angular.js',
			image : 'images/6.png',
			desc : 'Chat room',
			url : 'http://54.166.26.82:9000'
		},
		{
			name : 'angular.js, mysql, redis, mongoDB',
			image : 'images/6.png',
			desc : 'UI pattern',
			url : 'https://github.com/doohee323/angularPattern'
		},
		{
			name : 'apache TAJO, Play!',
			image : 'images/6.png',
			desc : 'Cohort analysis',
			url : 'https://github.com/doohee323/tz-tajo'
		},
		{
			name : 'mysql, redis',
			image : 'images/5.png',
			desc : 'SpringORM',
			url : 'https://github.com/doohee323/SpringORM'
		},
		{
			name : 'Spring framework',
			image : 'images/2.png',
			desc : 'CodeGenerator',
			url : 'https://github.com/doohee323/lhf.codeGenerator'
		},
		{
			name : 'angular.js grid for CRUD',
			image : 'images/2.png',
			desc : 'Grid UI',
			url : 'https://github.com/doohee323/ngExcel'
		},
		{
			name : 'node.js, socket.io',
			image : 'images/2.png',
			desc : 'Socket.io',
			url : 'https://github.com/doohee323/sheepsocket'
		},
		{
			name : 'webview, angular.js',
			image : 'images/3.png',
			desc : 'Android Webapp',
			url : 'https://github.com/doohee323/ConcordChurch'
		}
		];
		
		$state.go('init');
});

