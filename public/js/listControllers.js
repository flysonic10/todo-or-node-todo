'use strict';

angular.module('ListControllers', ['ngRoute'])

.controller('ListsCtrl', ['$scope', '$http', function($scope, $http) {
  $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

  $http.get('api/lists').success(function(data) {
    $scope.lists = data;
  });

  $scope.addItem = function(){
    $http.post('api/lists', "name="+$scope.listName).success(function(data) {
      $scope.lists.push({'id': data.id, 'name': $scope.listName});
    });
  };
}])

.controller('ListDetailsCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('api/lists/'+$routeParams.listId).success(function(data) {
    $scope.list = data;
  });
}]);
