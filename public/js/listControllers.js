'use strict';

angular.module('ListControllers', ['ngRoute'])

.controller('ListsCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.lists = [
    {'name': 'eat'},
    {'name': 'sleep'},
    {'name': 'cerd'},

  ];

  $http.get('api/lists').success(function(data) {
    $scope.lists = data;
  });
}])

.controller('ListDetailsCtrl', [function () {

}]);
