'use strict';

angular.module('businessify', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'ngRoute',
  'ngMaterial',
  'firebase',
  'all.business',
  'add.business'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    })
    .when('/business', {
      templateUrl: 'app/all-business/all-business.html',
      controller: 'AllBusinessCtrl'
    })
    .when('/business/add', {
      templateUrl: 'app/add-business/add-business.html',
      controller: 'AddBusinessCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
