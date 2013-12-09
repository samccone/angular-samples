window.soundTrack = angular.module 'soundTrack', ['ngRoute', 'controllers']

window.soundTrack.config ['$routeProvider', ($routes) ->
  $routes.when('/',
    controller: 'tracks'
    templateUrl: 'tracks.html'
  )
]
