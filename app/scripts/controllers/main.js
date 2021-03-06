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

	$scope.mail_title = 'Dewey\'s portfolio!';
	$scope.slogan = 'Senior Software Engineer, DevOps';

	$scope.sites = [
		{
			desc : 'DevOps',
			name : 'CI, CD on AWS, Kubernetest and on-promise',
			image : '',
			site : 'devops',
			url : 'http://localhost:9001/#devops'
		},
		{
			desc : 'Senior Software Engineer',
			name : 'Full-stack Software Engineer',
			image : '',
			site : 'se',
			url : 'http://localhost:9001/#se'
		}
		];
		
		$state.go('devops');
	
	$scope.goSite = function(site) {
		$state.go(site);
	}
});

