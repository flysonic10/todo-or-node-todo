'use strict';

angular.module('ListControllers', ['ngRoute'])

.controller('ListsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('api/lists').success(function(data) {
    $scope.lists = data;
  });
}])

.controller('ListDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('api/lists/'+$routeParams.listId).success(function(data) {
    $scope.list = data;
  });
}]);
