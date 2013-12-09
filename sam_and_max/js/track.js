(function() {
  window.controllers = window.controllers || angular.module('controllers', []);

  controllers.controller('track', [
    '$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
      var request;
      $scope.loading = true;
      $scope.name = $routeParams.id;
      request = $http({
        method: 'JSONP',
        url: "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + (encodeURIComponent($routeParams.id)) + "&api_key=1a7c2b9bdb474400ca73abd6002471cf&format=json&callback=JSON_CALLBACK"
      });
      return request.success(function(d) {
        $scope.loading = false;
        return $scope.track = d.results.trackmatches.track[0];
      });
    }
  ]);

}).call(this);
