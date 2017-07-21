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
  .controller('DevOpsCtrl', function($scope, $http, $location, $state) {

	$scope.mail_title = 'Dewey\'s DevOps!';
	$scope.mail_title2 = 'Senior Software Engineer';
	$scope.slogan = 'with java(Spring, Play!), javascript(Angular.js, node.js), Golang, PHP, and python.';

	$scope.sites = [
		{
			name : 'ELK(Elasticsearch/Logstash/Kibana)',
			image : 'images/6.png',
			desc : 'Multiple ELK servers on vagrant',
			url : 'https://github.com/doohee323/tz-elk'
		},
		{
			name : 'Chef',
			image : 'images/6.png',
			desc : 'Chef Server - client on vagrant',
			url : 'https://github.com/doohee323/tz-chef'
		},
		{
			name : 'Docker registry server',
			image : 'images/6.png',
			desc : 'Docker registry server in vagrant',
			url : 'https://github.com/doohee323/docker-registry-vagrant'
		},
		{
			name : 'Apache Storm',
			image : 'images/6.png',
			desc : 'Kafka - Storm - Esper on vagrant',
			url : 'https://github.com/doohee323/tz-kf-storm'
		},
		{
			name : 'Golang graphite',
			image : 'images/6.png',
			desc : 'Graphite server integrated golang',
			url : 'https://github.com/doohee323/tz_golang_graphite'
		},
		{
			name : 'Simple Graphite',
			image : 'images/6.png',
			desc : 'Graphite server(statsd / grafana) on vagrant',
			url : 'https://github.com/doohee323/tz-graphite.git'
		},
		{
			name : 'Graphite relay server',
			image : 'images/6.png',
			desc : 'Graphite relay server with HAProxy',
			url : 'https://github.com/doohee323/tz-graphite-extend.git'
		},
		{
			name : 'HAProxy',
			image : 'images/6.png',
			desc : 'HAProxy Load Balancing on vagrant',
			url : 'https://github.com/doohee323/tz-haproxy'
		},
		{
			name : 'Nagios',
			image : 'images/6.png',
			desc : 'Nagios on vagrant',
			url : 'https://github.com/doohee323/tz-nagios.git'
		},
		{
			name : 'Ganglia',
			image : 'images/6.png',
			desc : 'Ganglia on vagrant',
			url : 'https://github.com/doohee323/tz-ganglia.git'
		},
		{
			name : 'Apache TAJO, Play!, AWS CLI (http://goo.gl/BE7niG)',
			image : 'images/6.png',
			desc : 'Cohort analysis',
			url : 'https://github.com/doohee323/tz-tajo'
		},
		{
			name : 'Kali linux',
			image : 'images/6.png',
			desc : 'Kali linux on vagrant',
			url : 'https://github.com/doohee323/kali_in_vagrant'
		},
		{
			name : 'Node.js',
			image : 'images/6.png',
			desc : 'Deploy server - agent',
			url : 'https://github.com/doohee323/tz-deploy'
		},
		{
			name : 'jira/jenkins/mysql/nginx',
			image : 'images/6.png',
			desc : 'Basic Development Environment',
			url : 'https://github.com/doohee323/tz-dev-env'
		},
		{
			name : 'wiki/mysql/nginx',
			image : 'images/6.png',
			desc : 'Media wiki on vagrant',
			url : 'https://github.com/doohee323/wiki-vagrant'
		},
		{
			name : 'wordpress/mysql/nginx',
			image : 'images/6.png',
			desc : 'wordpress on vagrant',
			url : 'https://github.com/doohee323/wordpress-vagrant'
		},
		];
	
		$state.go('devops');
		
	$scope.goSite = function(site) {
		$state.go(site);
	}
		
});

