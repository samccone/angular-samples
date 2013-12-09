(function() {
  window.islandControllers = angular.module('islandControllers', []);

  islandControllers.controller('IslandList', [
    '$scope', '$http', function($scope, $http) {
      return $scope.islands = ["Flotsam", "Jerkbait", "Brillig", "Boulder Beach", "Isle of Ewe", "Rock of Gelato"];
    }
  ]);

  islandControllers.controller('IslandDetail', [
    '$scope', '$routeParams', function($scope, $routeParams) {
      return $scope.islandName = $routeParams.islandName;
    }
  ]);

}).call(this);
