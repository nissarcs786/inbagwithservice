(function() {
	'use strict';
		var DemoCntrl = function($scope, $ionicHistory, $rootScope, $state, $stateParams) {

			//initize init funtion
			function init(){
				

			};
			
			init();
		}
		
	DemoCntrl.$inject = ['$scope','$ionicHistory', '$rootScope', '$state', '$stateParams'];

	angular
	.module('starter')
	.controller('DemoCntrl',DemoCntrl);
})();
