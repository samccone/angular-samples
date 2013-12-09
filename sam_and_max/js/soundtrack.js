(function() {
  window.soundTrack = angular.module('soundTrack', ['ngRoute', 'controllers']);

  window.soundTrack.config([
    '$routeProvider', function($routes) {
      return $routes.when('/', {
        controller: 'tracks',
        templateUrl: 'tracks.html'
      });
    }
  ]);

}).call(this);
