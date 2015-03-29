module.exports = function(app) {

  /*
   * Page Controller
   */

  app.controller('pageCtrl', function($scope) {
    $scope.menuOpen = false

    $scope.$on('menuUpdate', function() {
      $scope.menuOpen = !$scope.menuOpen
    })
  })

}
