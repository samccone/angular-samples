window.controllers = angular.module 'controllers', []

controllers.controller 'tracks', ['$scope', '$timeout', ($scope, $timeout) ->
  $scope.tracks   = []
  $scope.loading  = true
  $timeout (-> $scope.tracks = ["Outside Headquarters","Carnival of the Odd","Wak-a-Rat"]; $scope.loading = false), 2000

  $scope.loadMoreTracks = ->
    $scope.loading = true
    $timeout (->
      $scope.tracks = $scope.tracks.concat([~~(Math.random() * 50)])
      $scope.loading = false
    ), 2000
]
