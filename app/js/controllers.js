'use strict';

/* Controllers */
/* Should be used to
* - set the initial state of a scope by attaching models to it
* - set functions on the scope that perform some tasks
*/

angular.module('myApp.controllers', []).
  controller('FinanceController', function($scope) {
    $scope.salary = 0;
    $scope.percentage = 0;
    $scope.result = function() {
      return $scope.salary * $scope.percentage * 0.01;
    }
  });

angular.module('myApp.controllers', []).
  controller('GreetingController', function($scope) {
    this.now = new Date();
    this.helloMessages = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'Konnichiwa'];
    this.greeting = this.helloMessages[0];
    this.getRandomHelloMessage = function() {
      var randomNumber = parseInt(Math.random() * this.helloMessages.length);
      this.greeting = this.helloMessages[randomNumber];
    }
  });


angular.module('myApp.controllers',[])
  
  .controller('WhateverController', function($scope) {
    $scope.publisher='SitePoint';
    $scope.type='Web Development';
    $scope.name='Scope for SiteController';
  })
  
  .controller('BookController', function($scope) {
    $scope.books = ['Jump Start HTML5', 'Jump Start CSS', 'Jump Start Responsive Web Design'];
    $scope.name = 'Scope for BookController';
    $scope.addToWishList = function(book) {
      $scope.wishListCount++;
    }
    $scope.wishListCount = 0;
    // Watcher checks for and tracks changes
    var unbindWatcher = $scope.$watch('wishListCount', function(newValue, oldValue) {
      console.log('called ' + newValue + ' times');
      if(newValue == 2) {
        alert('Great! You have 2 items in your wish list. Time to buy what you love.');
        unbindWatcher(); // Setting the water to a variable and calling it will unbind the watcher
        // It makes it so it no longer works. This prevents it from being called more
        // than twice in this example.
      }
    });
  });

angular.module('myApp.controllers',[])
  .controller('Controller1', function($scope, $location) {
    $scope.loadView2 = function() {
      $location.path('/view2/' + $scope.firstname + '/' + $scope.lastname);
    }
  })
  
  .controller('Controller2', function($scope, $routeParams, names) {
    $scope.firstname = $routeParams.firstname;
    $scope.lastname = $routeParams.lastname;
    $scope.names = names; // names is now a dependency. Declared in app.js
  });