'use strict';

angular.module('TodoControllers', ['ngRoute'])

.controller('TodosCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  $http.defaults.headers.put["Content-Type"] = "application/x-www-form-urlencoded";

  $http.get('api/lists/'+$routeParams.listId+'/todos').success(function(data) {
    $scope.todos = data.todos;
  });
  
  $scope.markStatus = function(todoId, todoChecked){
    $http.put('api/lists/'+$routeParams.listId+'/todos/'+todoId,
      "checked="+todoChecked).success(function(data) {});
  };
}]);
