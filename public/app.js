'use strict';

// Declare app level module which depends on views, and components
angular.module('todoOrNodeTodo', [
  'ngRoute',
  'ListControllers'
])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({ enabled: true });

  $routeProvider

    .when('/lists', {
      templateUrl: '/partials/lists.html',
      controller: 'ListsCtrl'
    })

    .otherwise({redirectTo: '/lists'});

}]);
