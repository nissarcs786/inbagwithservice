(function() {
	'use strict';
	var Auth = function($http, $q, API_URL_PREFIX)
	{	

		/*
	    *@name : loginUser
	    *@desc : Request For Authication
	    */
	   	this.loginUser  = function(data){

	        var deferredAbort  = $q.defer();

	        // Initiate the AJAX request.
	        var request = $http({
	            method: 'post',
	            url: API_URL_PREFIX + 'jwt-auth/v1/token',
	            data: data,
	            timeout: deferredAbort.promise
	        });

	        var promise = request.then(
	            function( response ) {
	                return( response.data );
	            },
	            function() {
	                return( $q.reject( 'Something went wrong' ) );
	            }
	        );

	        promise.abort = function() {
	            deferredAbort.resolve();
	        };

	        promise.finally(
	            function() {
	                promise.abort = angular.noop;
	                deferredAbort = request = promise = null;
	            }
	        );

	        return( promise );
	    };	

	    // Return the public API.
	    return({
	        loginUser: this.loginUser,
	    });
		
	}
		
	Auth.$inject = ['$http', '$q', 'API_URL_PREFIX'];

	angular
	.module('starter')
	.factory('Auth',Auth);
})();