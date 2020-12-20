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
  .controller('SeCtrl', function($scope, $http, $location, $state) {

	$scope.mail_title = 'Dewey\'s applications!';
	$scope.mail_title2 = 'DevOps';
	$scope.slogan = 'with java(Spring, Play!), javascript(Angular.js, node.js), Golang, PHP, and python.';

	$scope.sites = [
		{
			name : 'Spring boot',
			image : '',
			desc : 'Basic Spring Boot',
			url : 'https://github.com/doohee323/tz-spring-boot'
		},
		{
			name : 'Google Script API, spring boot',
			image : '',
			desc : 'Google web',
			url : 'http://gweb.topzone.biz/'
		},
		{
			name : 'java core',
			image : '',
			desc : 'Multiple commands in ssh / telnet / shell',
			url : 'https://github.com/doohee323/mcmd'
		},
		{
			name : 'PHP, node.js(socket.io), angular.js',
			image : '',
			desc : 'Chat app (admin)',
			url : 'http://admin.topzone.biz'
		},
		{
			name : 'Play!, angular.js, Websocket',
			image : '',
			desc : 'Chat room',
			url : 'http://chatroom.topzone.biz:9000'
		},
		{
			name : 'node.js, angular.js, socket.io, crawler',
			image : '',
			desc : 'CMS (Content Management)',
			url : 'http://52.0.156.206:3003'
		},
		{
			name : 'Spring',
			image : '',
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
			image : '',
			desc : 'Multi-line and geographic chart',
			url : 'http://prototype-chart-d3.s3-website-us-west-1.amazonaws.com'
		},
		{
			name : 'Golang',
			image : '',
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
			image : '',
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
			name : 'wordpress',
			image : 'images/3.png',
			desc : 'wordpress on vagrant',
			url : 'https://github.com/doohee323/wordpress-vagrant'
		},
		{
			name : 'android, webview, angular.js',
			image : 'images/3.png',
			desc : 'News feeder Webapp',
			url : 'https://github.com/doohee323/newsFeeder'
		}
		];
		
		$state.go('se');
		
	$scope.goSite = function(site) {
		$state.go(site);
	}
		
});

