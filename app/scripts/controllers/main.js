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

	$scope.mail_title = 'Dewey\'s apps!';
	$scope.slogan = 'with java(Spring, Play!), javascript(Angular.js, node.js), Golang, PHP, and python.';

	$scope.sites = [
		{
			name : 'PHP, node.js(socket.io), angular.js',
			image : 'images/6.png',
			desc : 'Chat app (admin)',
			url : 'http://admin.topzone.biz'
		},
		{
			name : 'Play!, angular.js, Websocket',
			image : 'images/6.png',
			desc : 'Chat room',
			url : 'http://chatroom.topzone.biz:9000'
		},
		{
			name : 'node.js, angular.js, socket.io, crawler',
			image : 'images/6.png',
			desc : 'CMS (Content Management)',
			url : 'http://52.0.156.206:3003'
		},
		{
			name : 'apache TAJO, Play!, AWS CLI (http://goo.gl/BE7niG)',
			image : 'images/6.png',
			desc : 'Cohort analysis',
			url : 'https://github.com/doohee323/tz-tajo'
		},
		{
			name : 'Spring',
			image : 'images/6.png',
			desc : 'Common Assets for ERP',
			url : 'http://goo.gl/O4Bp3o'
		},
		{
			name : 'Spring f/w, mysql, redis',
			image : 'images/5.png',
			desc : 'SpringORM',
			url : 'https://github.com/doohee323/SpringORM'
		},
		{
			name : 'D3 chart',
			image : 'images/6.png',
			desc : 'Multi-line and geographic chart',
			url : 'http://prototype-chart-d3.s3-website-us-west-1.amazonaws.com'
		},
		{
			name : 'Apache Storm',
			image : 'images/6.png',
			desc : 'Kafka - Storm - Esper on vagrant',
			url : 'https://github.com/doohee323/tz-kf-storm'
		},
		{
			name : 'Golang',
			image : 'images/6.png',
			desc : 'Multiple request (HTTP) / shell command',
			url : 'https://github.com/doohee323/tz_mcall'
		},
		{
			name : 'Spring, Oracle, freemarker',
			image : 'images/2.png',
			desc : 'CodeGenerator',
			url : 'https://github.com/doohee323/lhf.codeGenerator'
		},
		{
			name : 'angular.js, mysql, redis, mongoDB',
			image : 'images/6.png',
			desc : 'UI pattern',
			url : 'https://github.com/doohee323/angularPattern'
		},
		{
			name : 'angular.js, node.js, express, socket.io',
			image : 'images/2.png',
			desc : 'CRUD Grid',
			url : 'https://github.com/doohee323/ngExcel'
		},
		{
			name : 'android, webview, angular.js',
			image : 'images/3.png',
			desc : 'Web Crawler',
			url : 'https://github.com/doohee323/ConcordChurch'
		},
		{
			name : 'android, webview, angular.js',
			image : 'images/3.png',
			desc : 'News feeder Webapp',
			url : 'https://github.com/doohee323/newsFeeder'
		}
		];
		
		$state.go('init');
});

