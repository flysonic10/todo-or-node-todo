'use strict';

// Declare app level module which depends on views, and components
angular.module('todoOrNodeTodo', [
  'ngRoute',
  'ListControllers',
  'TodoControllers'
])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({ enabled: true });

  $routeProvider

    .when('/lists', {
      templateUrl: '/partials/lists.html',
      controller: 'ListsCtrl'
    })
    .when('/lists/:listId', {
      templateUrl: '/partials/list_details.html',
      controller: 'ListDetailsCtrl'
    })
    .otherwise({redirectTo: '/lists'});

}]);
