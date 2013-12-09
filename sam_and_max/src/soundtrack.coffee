window.soundTrack = angular.module 'soundTrack', ['ngRoute', 'controllers']

window.soundTrack.config ['$routeProvider', ($routes) ->
  $routes.when('/',
    controller: 'tracks'
    templateUrl: 'tracks.html'
  )

  $routes.when '/tracks/:id',
    controller: 'track'
    templateUrl: 'track.html'
]
