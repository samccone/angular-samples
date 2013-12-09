(function() {
  window.controllers || (window.controllers = angular.module('controllers', []));

  controllers.controller('tracks', [
    '$scope', '$timeout', function($scope, $timeout) {
      $scope.tracks = [];
      $scope.loading = true;
      $timeout((function() {
        $scope.tracks = ["Outside Headquarters", "Carnival of the Odd", "Wak-a-Rat"];
        return $scope.loading = false;
      }), 2000);
      return $scope.loadMoreTracks = function() {
        $scope.loading = true;
        return $timeout((function() {
          $scope.tracks = $scope.tracks.concat([~~(Math.random() * 50)]);
          return $scope.loading = false;
        }), 2000);
      };
    }
  ]);

}).call(this);
