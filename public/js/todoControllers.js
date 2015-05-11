'use strict';

angular.module('TodoControllers', ['ngRoute'])

.controller('TodosCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $http.get('api/lists/'+$routeParams.listId+'/todos').success(function(data) {
    $scope.todos = data.todos;
  });
}]);
