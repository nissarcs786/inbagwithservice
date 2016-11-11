(function() {
	'use strict';
		var LoginCtrl = function($scope, $ionicHistory, $rootScope, $state, $stateParams, Auth, $timeout) { 

			//initize init funtion
			function init(){
				$scope.loginData = {};
				$timeout(function(){
				      $ionicHistory.clearCache();
				      $ionicHistory.clearHistory();
   			    },1000);
			};


			/**
			* @name: doLogin
			* @desc: Perform the login action when the user submits the login form
			**/
			$scope.doLogin = function(){
				var login = Auth.loginUser($scope.loginData);
    			login.then(loginSuccess,loginError);
			};

			// Perform login success action
			var loginSuccess = function(response){
			    console.log(response)
			};

			// Perform login Failure action
			var loginError = function(error){
			    console.log(error);
			};

			init();
		}
		
	LoginCtrl.$inject = ['$scope','$ionicHistory', '$rootScope', '$state', '$stateParams', 'Auth', '$timeout'];

	angular
	.module('starter')
	.controller('LoginCtrl',LoginCtrl);
})();
