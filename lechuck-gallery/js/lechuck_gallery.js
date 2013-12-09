(function() {
  window.lecheckApp = angular.module('lechuckApp', [function() {}]);

  lecheckApp.controller('lechuckGallery', [
    '$scope', 'imageSearch', function($scope, imageSearch) {
      var loadImages;
      $scope.currentPage = 0;
      $scope.images = [];
      $scope.nextPage = function() {
        ++$scope.currentPage;
        return loadImages();
      };
      loadImages = function() {
        return imageSearch("lechuck monkey island", $scope.currentPage).success(function(d) {
          return $scope.images = $scope.images.concat(d.responseData.results);
        });
      };
      return loadImages();
    }
  ]);

}).call(this);
