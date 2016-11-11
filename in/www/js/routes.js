/**
* JobProgress App Module
*
* App States/Routes
*/
var app = angular.module('starter');

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
  })

  .state('login', {
      url: "/login",
      templateUrl: "templates/login.html",
      controller: 'LoginCtrl'
  })

});
