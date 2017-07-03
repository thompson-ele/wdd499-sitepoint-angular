'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
])

.config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.when('/view1', {
                    controller: 'Controller1',
                    templateUrl: '/partials/partial1.html'
                  })
                  .when('/view2/:firstname/:lastname', {
                    controller: 'Controller2',
                    templateUrl: '/partials/partial2.html',
                    resolve: {
                      names: function() {
                        // Usually you would use a service to retrive values from the server here
                        return ['Misko', 'Vojta', 'Brad']; // this is now a dependency
                      }
                    } 
                  })
                  .otherwise({redirectTo:'/view1'});
    $locationProvider.html5Mode(true); // activate HTML5 mode - removes need for # in URLs
  }
]);

// .run(function($rootScope){
//     $rootScope.title='Famous Books';
//     $rootScope.name="Root Scope";
// });