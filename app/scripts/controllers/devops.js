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
	$scope.mail_title2 = 'Software Engineer';
	$scope.slogan = 'Using Python, Golang, java and node.js';

	$scope.sites = [
		{
			name : 'TZ-k8s-vagrant',
			image : 'images/tz-k8s-vagrant-env.png',
			desc : 'Jenkins on AWS from vagrant with Terraform, Packer',
			url : 'https://github.com/doohee323/tz-k8s-vagrant.git'
		},
		{
			name : 'Kubernetes(CKA)',
			image : 'images/certified-kubernetes-administrator-cka-certificate.png',
			desc : 'Certified Kubernetes Administrator',
			url : 'https://bit.ly/3a1fM9B'
		},
		{
			name : 'ELK(Elasticsearch/Logstash/Kibana)',
			image : '',
			desc : 'Multiple ELK servers on vagrant',
			url : 'https://github.com/doohee323/tz-elk'
		},
		{
			name : 'TZ-Rancher',
			image : '',
			desc : 'Jenkins on Kubernetes with Rancher',
			url : 'https://github.com/doohee323/tz-rancher'
		},
		{
			name : 'Docker registry server',
			image : '',
			desc : 'Docker registry server in vagrant',
			url : 'https://github.com/doohee323/docker-registry-vagrant'
		},
		{
			name : 'Chef',
			image : '',
			desc : 'Chef Server - client on vagrant',
			url : 'https://github.com/doohee323/tz-chef'
		},
		{
			name : 'Apache Storm',
			image : '',
			desc : 'Kafka - Storm - Esper on vagrant',
			url : 'https://github.com/doohee323/tz-kf-storm'
		},
		{
			name : 'Golang graphite',
			image : '',
			desc : 'Graphite server integrated golang',
			url : 'https://github.com/doohee323/tz_golang_graphite'
		},
		{
			name : 'Simple Graphite',
			image : '',
			desc : 'Graphite server(statsd / grafana) on vagrant',
			url : 'https://github.com/doohee323/tz-graphite.git'
		},
		{
			name : 'Graphite relay server',
			image : '',
			desc : 'Graphite relay server with HAProxy',
			url : 'https://github.com/doohee323/tz-graphite-extend.git'
		},
		{
			name : 'HAProxy',
			image : '',
			desc : 'HAProxy Load Balancing on vagrant',
			url : 'https://github.com/doohee323/tz-haproxy'
		},
		{
			name : 'Nagios',
			image : '',
			desc : 'Nagios on vagrant',
			url : 'https://github.com/doohee323/tz-nagios.git'
		},
		{
			name : 'Ganglia',
			image : '',
			desc : 'Ganglia on vagrant',
			url : 'https://github.com/doohee323/tz-ganglia.git'
		},
		{
			name : 'Apache TAJO, Play!, AWS CLI (http://goo.gl/BE7niG)',
			image : '',
			desc : 'Cohort analysis',
			url : 'https://github.com/doohee323/tz-tajo'
		},
		{
			name : 'Kali linux',
			image : '',
			desc : 'Kali linux on vagrant',
			url : 'https://github.com/doohee323/kali_in_vagrant'
		},
		{
			name : 'Node.js',
			image : '',
			desc : 'Deploy server - agent',
			url : 'https://github.com/doohee323/tz-deploy'
		},
		// {
		// 	name : 'jira/jenkins/mysql/nginx',
		// 	image : '',
		// 	desc : 'Basic Development Environment',
		// 	url : 'https://github.com/doohee323/tz-dev-env'
		// },
		// {
		// 	name : 'wiki/mysql/nginx',
		// 	image : '',
		// 	desc : 'Media wiki on vagrant',
		// 	url : 'https://github.com/doohee323/wiki-vagrant'
		// },
		// {
		// 	name : 'Wordpress/mysql/nginx',
		// 	image : '',
		// 	desc : 'Wordpress on vagrant',
		// 	url : 'https://github.com/doohee323/wordpress-vagrant'
		// },
		];
	
		$state.go('devops');
		
	$scope.goSite = function(site) {
		$state.go(site);
	}
		
});

