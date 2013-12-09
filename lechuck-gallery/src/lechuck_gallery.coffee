window.lecheckApp = angular.module 'lechuckApp', [->
]

lecheckApp.controller 'lechuckGallery', ['$scope', 'imageSearch', ($scope, imageSearch) ->
  $scope.currentPage = 0

  $scope.images = []
  $scope.nextPage = ->
    ++$scope.currentPage
    loadImages()

  loadImages = ->
    imageSearch("lechuck monkey island", $scope.currentPage).success (d) ->
      $scope.images = $scope.images.concat(d.responseData.results)

  loadImages()
]
