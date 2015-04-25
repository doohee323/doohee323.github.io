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
	$scope.slogan = 'with java(Spring, Play!), javascript(Angular.js, Node.js) and python.';

	$scope.sites = [
		{
			name : 'node.js, angular.js, socket.io, crawler',
			image : 'images/6.png',
			desc : 'CMS(Content Management System)',
			url : 'http://52.0.156.206:3003'
		},
		{
			name : 'Play!, angular.js, Websocket',
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
			name : 'apache TAJO, Play!, AWS CLI(http://goo.gl/BE7niG)',
			image : 'images/6.png',
			desc : 'Cohort analysis',
			url : 'https://github.com/doohee323/tz-tajo'
		},
		{
			name : 'Spring f/w, mysql, redis',
			image : 'images/5.png',
			desc : 'SpringORM',
			url : 'https://github.com/doohee323/SpringORM'
		},
		{
			name : 'Spring, Oracle, freemarker',
			image : 'images/2.png',
			desc : 'CodeGenerator',
			url : 'https://github.com/doohee323/lhf.codeGenerator'
		},
		{
			name : 'angular.js, node.js, express, socket.io',
			image : 'images/2.png',
			desc : 'Grid for CRUD',
			url : 'https://github.com/doohee323/ngExcel'
		},
		{
			name : 'node.js, socket.io',
			image : 'images/2.png',
			desc : 'Socket.io',
			url : 'https://github.com/doohee323/sheepsocket'
		},
		{
			name : 'Android, webview, angular.js',
			image : 'images/3.png',
			desc : 'Android Webapp',
			url : 'https://github.com/doohee323/ConcordChurch'
		}
		];
		
		$state.go('init');
});

