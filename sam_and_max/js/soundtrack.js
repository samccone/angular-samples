(function() {
  window.soundTrack = angular.module('soundTrack', ['ngRoute', 'controllers']);

  window.soundTrack.config([
    '$routeProvider', function($routes) {
      $routes.when('/', {
        controller: 'tracks',
        templateUrl: 'tracks.html'
      });
      return $routes.when('/tracks/:id', {
        controller: 'track',
        templateUrl: 'track.html'
      });
    }
  ]);

}).call(this);
